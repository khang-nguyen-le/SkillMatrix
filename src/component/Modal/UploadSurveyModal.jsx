import CUpload from '../Upload/Upload';
import CModal from './Modal';
import { Button, message } from 'antd';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { read, utils } from 'xlsx';
import { faker } from '@faker-js/faker';
import { useCreatedFormState } from '../../context/createdFormContext';
import { useAppState } from '../../context/appContext';
import { StyledLink } from './AddDomainModalStyle';
import SurveyFormTemplate from './../../survey_form_template.xlsx';
import { useDomains } from '../../context/domainContext';

const UploadSurveyModal = ({ open, onCancel }) => {
  const [fileList, setFileList] = useState([]);
  const [pres, setPres] = useState([]);
  const { handleUploadForm, isLoading } = useCreatedFormState();
  const { handleSetCurrentTab } = useAppState();
  const { handleAddDomain } = useDomains();

  const handleUpload = () => {
    const domainId = faker.string.uuid();
    const presHaveSkillDomainName = pres.filter((pre) =>
      Object.prototype.hasOwnProperty.call(pre, 'Skill_Domain_Name'),
    );

    const skillDomains = presHaveSkillDomainName.map((pre) => ({
      skillDomainName: pre['Skill_Domain_Name'],
      id: faker.string.uuid(),
    }));

    const presHaveTargetTeams = pres.filter((pre) =>
      Object.prototype.hasOwnProperty.call(pre, 'Target_Teams'),
    );

    const targetTeams = presHaveTargetTeams.map((pre) => pre['Target_Teams']);

    const presHaveTargetMembers = pres.filter((pre) =>
      Object.prototype.hasOwnProperty.call(pre, 'Target_Members'),
    );

    const targetMembers = presHaveTargetMembers.map(
      (pre) => pre['Target_Members'],
    );

    const newDomain = {
      domainName: pres[0]['Domain_Name'],
      skillDomains,
      id: domainId,
    };

    const newSurveyForm = {
      formName: pres[0]['Form_Name'],
      description: pres[0]['Description'],
      startDate: pres[0]['Start_Date'],
      endDate: pres[0]['End_Date'],
      manager: {
        managerName: pres[0]['Manager'],
        id: faker.string.uuid(),
      },
      targetTeams,
      targetMembers,
      domain: {
        domainName: pres[0]['Domain_Name'],
        id: domainId,
      },
      owner: 'Created by me',
      createdAt: new Date().toISOString(),
      id: faker.string.uuid(),
    };

    handleUploadForm(newSurveyForm);

    setTimeout(() => {
      handleAddDomain(newDomain);
    }, 2000);

    handleSetCurrentTab('2');
    onCancel();
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

          const startDate = new Date(wb.Sheets.Sheet1['C2'].w).toISOString();
          const endDate = new Date(wb.Sheets.Sheet1['D2'].w).toISOString();

          const ws = wb.Sheets[wb.SheetNames[0]];
          let data = utils.sheet_to_json(ws);

          data[0] = {
            ...data[0],
            Start_Date: startDate,
            End_Date: endDate,
          };

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

  const handleCancel = () => {
    onCancel();
    setFileList([]);
  };

  return (
    <CModal
      open={open}
      onCancel={handleCancel}
      title="Upload Survey"
      footer={[
        <Button
          key="submit"
          type="primary"
          loading={isLoading}
          onClick={handleUpload}
          disabled={fileList.length === 0}
        >
          Upload
        </Button>,
      ]}
    >
      <p style={{ paddingBottom: '8px' }}>
        Download a{' '}
        <StyledLink
          to={SurveyFormTemplate}
          download="survey_form_template"
          target="_blank"
          rel="noreferrer"
        >
          sample XLSX template
        </StyledLink>{' '}
        to see an example of the format required
      </p>
      <CUpload props={props} />
    </CModal>
  );
};

UploadSurveyModal.propTypes = {
  open: PropTypes.bool,
  onCancel: PropTypes.func,
};

export default UploadSurveyModal;
