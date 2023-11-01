import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { Form } from 'antd';

import { useAppState } from '../../context/appContext';
import { DefaultButton, TextButton } from '../Button/Button';
import {
  FormItem,
  StyledDatePicker,
  StyledDatePickerWrapper,
  StyledForm,
  StyledSelect,
} from './DetailsFormStyle';
import { managerApi } from '../../api/manager';
import { teamApi } from '../../api/team';
import { useDomains } from '../../context/domainContext';

const DetailsForm = () => {
  const { formInfo, handleNextStep, handlePrevStep, handleAddForm } =
    useAppState();
  const { domains } = useDomains();
  const navigate = useNavigate();
  const [managers, setManagers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [form] = Form.useForm();
  const { setFieldsValue } = form;
  const { startDate, endDate, manager, targetTeams, targetMembers, domain } =
    formInfo;

  useEffect(() => {
    if (Object.keys(formInfo).length === 0) {
      navigate('/forms');
    }
  }, [formInfo, navigate]);

  useEffect(() => {
    setFieldsValue({
      startDate: startDate ? dayjs(startDate) : '',
      endDate: endDate ? dayjs(endDate) : '',
      manager,
      targetTeams,
      targetMembers,
      domain,
    });
  }, [
    startDate,
    endDate,
    manager,
    targetTeams,
    targetMembers,
    domain,
    setFieldsValue,
  ]);

  useEffect(() => {
    const fetchManagers = async () => {
      try {
        const res = await managerApi.fetchManager();

        const newData = res.data.map((manager) => ({
          ...manager,
          label: manager.managerName,
          value: manager.id,
        }));

        setManagers(newData);
      } catch (err) {
        alert('There was an error fetching managers');
      }
    };

    fetchManagers();
  }, []);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await teamApi.fetchTeams();
        const newData = res.data.map((team) => {
          return {
            ...team,
            label: team.teamName,
            value: team.teamName,
          };
        });

        setTeams(newData);
      } catch (err) {
        alert('There was an error fetching teams');
      }
    };

    fetchTeams();
  }, []);

  useEffect(() => {
    if (formInfo.targetTeams) {
      const unselectedTeams = teams.filter(
        (team) => !formInfo.targetTeams.includes(team.teamName),
      );
      const exclusiveMembers = unselectedTeams
        .map((team) => team.teamMembers)
        .flat();
      const newExclusiveMembers = exclusiveMembers.map((exclusiveMember) => ({
        label: exclusiveMember,
        value: exclusiveMember,
      }));
      setMembers(newExclusiveMembers);

      return;
    }

    const members = teams.map((team) => team.teamMembers);
    const newMembers = members.flat().map((member) => ({
      label: member,
      value: member,
    }));
    setMembers(newMembers);
  }, [teams]);

  const newDomains = domains.map((domain) => {
    return {
      ...domain,
      label: domain.domainName,
      value: domain.id,
    };
  });

  const handleChangeTargetTeams = (selectedTeams) => {
    const unselectedTeams = teams.filter(
      (team) => !selectedTeams.includes(team.teamName),
    );

    const exclusiveMembers = unselectedTeams
      .map((team) => team.teamMembers)
      .flat();
    const newExclusiveMembers = exclusiveMembers.map((exclusiveMember) => ({
      label: exclusiveMember,
      value: exclusiveMember,
    }));
    setMembers(newExclusiveMembers);
  };

  const handleBackClick = () => {
    handlePrevStep();
    navigate(-1);
  };

  const handleSubmit = (data) => {
    const selectedTeams = teams.filter((team) =>
      data.targetTeams.includes(team.teamName),
    );

    const allSelectedMembers = selectedTeams
      .map((selectedTeam) => selectedTeam.teamMembers)
      .flat();

    const newTargetMembers = selectedMembers.filter(
      (selectedMember) => !allSelectedMembers.includes(selectedMember),
    );

    handleAddForm({
      ...data,
      targetMembers: newTargetMembers,
    });
    handleNextStep();
    navigate('/forms/create/confirmation');
  };

  return (
    <StyledForm
      requiredMark={false}
      layout="vertical"
      onFinish={handleSubmit}
      form={form}
    >
      <StyledDatePickerWrapper>
        <FormItem
          label="Start Date"
          name="startDate"
          rules={[{ required: true, message: 'Please enter start date' }]}
        >
          <StyledDatePicker size="large" format="DD/MM/YYYY" />
        </FormItem>
        <FormItem
          label="End Date"
          name="endDate"
          rules={[{ required: true, message: 'Please enter the end date' }]}
        >
          <StyledDatePicker size="large" format="DD/MM/YYYY" />
        </FormItem>
      </StyledDatePickerWrapper>
      <FormItem
        label="Manager"
        name="manager"
        rules={[{ required: true, message: 'Please select a manager' }]}
      >
        <StyledSelect allowClear options={managers} size="large" labelInValue />
      </FormItem>
      <FormItem
        label="Target Teams"
        name="targetTeams"
        rules={[{ required: true, message: 'Please select the target teams' }]}
      >
        <StyledSelect
          mode="multiple"
          allowClear
          options={teams}
          size="large"
          onChange={handleChangeTargetTeams}
        />
      </FormItem>
      <FormItem label="Target Members" name="targetMembers">
        <StyledSelect
          mode="multiple"
          allowClear
          options={members}
          size="large"
          onChange={(e) => {
            setSelectedMembers(e);
          }}
        />
      </FormItem>
      <FormItem
        label="Domain"
        name="domain"
        rules={[{ required: true, message: 'Please select a doamin' }]}
      >
        <StyledSelect
          allowClear
          options={newDomains}
          size="large"
          labelInValue
        />
      </FormItem>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'end' }}>
        <TextButton onClick={handleBackClick}>&larr; Back</TextButton>
        <DefaultButton htmlType="submit">Next &rarr;</DefaultButton>
      </div>
    </StyledForm>
  );
};

export default DetailsForm;
