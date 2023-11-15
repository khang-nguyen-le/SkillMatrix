import { Button, message } from 'antd';
// import { Button } from 'antd';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { faker } from '@faker-js/faker';
import { read, utils } from 'xlsx';

import CModal from './Modal';
import CUpload from '../Upload/Upload';
import {
  ImportDescription,
  ImportSection,
  StyledLink,
} from './AddDomainModalStyle';
import { useDomains } from '../../context/domainContext';
import DomainTemplate from './../../domain_template.xlsx';

const ImportDomainModal = () => {
  const [fileList, setFileList] = useState([]);
  const [pres, setPres] = useState([]);

  const {
    isImportDomainModalOpen,
    handleImportDomainModalToggle,
    handleAddDomain,
    isDomainLoading,
  } = useDomains();

  const handleCancel = () => {
    handleImportDomainModalToggle('close');
    setFileList([]);
  };

  const handleUpload = () => {
    const newSkillDomains = pres.slice(1).map((newSkillDomain) => ({
      skillDomainName: newSkillDomain.Skill_Domain_Name,
      id: faker.string.uuid(),
    }));

    const newDomain = {
      domainName: pres[0].Form_Name,
      skillDomains: newSkillDomains,
      id: faker.string.uuid(),
    };

    handleAddDomain(newDomain);
    handleImportDomainModalToggle('close');
    setFileList([]);
  };

  const handleChange = (info) => {
    let newFileList = [...info.fileList];
    newFileList = newFileList.slice(-1);

    setFileList(newFileList);
  };

  const props = {
    name: 'file',
    accept:
      'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    beforeUpload: (file) => {
      const isExcel =
        file.type === 'application/vnd.ms-excel' ||
        file.type ===
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      if (!isExcel) {
        message.error('You can only upload Excel file!');
      }

      const handleData = async () => {
        try {
          const ab = await file.arrayBuffer();
          const wb = read(ab);
          const ws = wb.Sheets[wb.SheetNames[0]];
          const data = utils.sheet_to_json(ws);

          setPres(data);
        } catch (err) {
          console.log(err);
        }
      };

      handleData();
      return false;
    },
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    fileList,
    onChange: handleChange,

    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <CModal
      open={isImportDomainModalOpen}
      onCancel={handleCancel}
      //   onOk={}
      title="Import Domain"
      footer={[
        <Button
          key="submit"
          type="primary"
          loading={isDomainLoading}
          onClick={handleUpload}
          disabled={fileList.length === 0}
        >
          Import
        </Button>,
      ]}
    >
      <ImportSection>
        <ImportDescription>
          Download a{' '}
          <StyledLink
            to={DomainTemplate}
            download="domain_template"
            target="_blank"
            rel="noreferrer"
          >
            sample XLSX template
          </StyledLink>{' '}
          to see an example of the format required
        </ImportDescription>
        <CUpload props={props} />
      </ImportSection>
    </CModal>
  );
};

ImportDomainModal.propTypes = {
  onOpen: PropTypes.bool,
  onCancel: PropTypes.func,
};

export default ImportDomainModal;
