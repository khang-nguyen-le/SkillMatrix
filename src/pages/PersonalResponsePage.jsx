import { Col, Row } from 'antd';
import styled from 'styled-components';
import { EditOutlined, ArrowLeftOutlined } from '@ant-design/icons';

import { PrimaryButton, TextButton } from '../component/Button/Button';
import RespondentCard from '../component/User/RespondentCard';
// import QuestionsTable from '../component/Table/QuestionsTable';
// import Radio from '../component/Radio/Radio';
import SkillDomainItem from '../component/Domain/SkillDomainItem';

// const columns = [
//   {
//     title: '',
//     dataIndex: 'domainSkill',
//     key: 'domainSkill',
//     width: 350,
//     ellipsis: true,
//   },
//   {
//     title: '0',
//     dataIndex: 'lv0',
//     key: 'lv0',
//     align: 'center',
//   },
//   {
//     title: '1',
//     dataIndex: 'lv1',
//     key: 'lv1',
//     align: 'center',
//   },
//   {
//     title: '2',
//     dataIndex: 'lv2',
//     key: 'lv2',
//     align: 'center',
//   },
//   {
//     title: '3',
//     dataIndex: 'lv3',
//     key: 'lv3',
//     align: 'center',
//   },
//   {
//     title: '4',
//     dataIndex: 'lv4',
//     key: 'lv4',
//     align: 'center',
//   },
//   {
//     title: '5',
//     dataIndex: 'lv5',
//     key: 'lv5',
//     align: 'center',
//   },
// ];
// const data = [
//   {
//     key: '1',
//     domainSkill: 'Domain Skill 1',
//     lv0: <Radio name="Domain_Skill_1" value={0} />,
//     lv1: <Radio name="Domain_Skill_1" value={1} />,
//     lv2: <Radio name="Domain_Skill_1" value={2} />,
//     lv3: <Radio name="Domain_Skill_1" value={3} />,
//     lv4: <Radio name="Domain_Skill_1" value={4} />,
//     lv5: <Radio name="Domain_Skill_1" value={5} />,
//   },
//   {
//     key: '2',
//     domainSkill: 'Domain Skill 2',
//     lv0: <Radio name="Domain_Skill_2" value={0} />,
//     lv1: <Radio name="Domain_Skill_2" value={0} />,
//     lv2: <Radio name="Domain_Skill_2" value={0} />,
//     lv3: <Radio name="Domain_Skill_2" value={0} />,
//     lv4: <Radio name="Domain_Skill_2" value={0} />,
//     lv5: <Radio name="Domain_Skill_2" value={0} />,
//   },
//   {
//     key: '3',
//     domainSkill: 'Domain Skill 3',
//     lv0: <Radio name="Domain_Skill_3" value={0} />,
//     lv1: <Radio name="Domain_Skill_3" value={0} />,
//     lv2: <Radio name="Domain_Skill_3" value={0} />,
//     lv3: <Radio name="Domain_Skill_3" value={0} />,
//     lv4: <Radio name="Domain_Skill_3" value={0} />,
//     lv5: <Radio name="Domain_Skill_3" value={0} />,
//   },
// ];

const PersonalResponsePage = () => {
  // const items = [
  //   {
  //     key: '1',
  //     label: (
  //       <p>
  //         Domain 1 <StyledAverage>(3.5)</StyledAverage>
  //       </p>
  //     ),
  //     children: (
  //       <TableWrapper>
  //         <QuestionsTable columns={columns} dataSource={data} />
  //       </TableWrapper>
  //     ),
  //   },
  // ];

  return (
    <PageWrapper>
      <PageTitleWrapper>
        <Container>
          <PageTitleContent>
            <TitleBox>
              <TextButton
                icon={<ArrowLeftOutlined style={{ fontSize: '24px' }} />}
              />
              <PageTitle>Survey Name</PageTitle>
            </TitleBox>

            <PrimaryButton size="large" icon={<EditOutlined />}>
              Edit
            </PrimaryButton>
          </PageTitleContent>
        </Container>
      </PageTitleWrapper>
      <Main>
        <Container>
          <Wrapper>
            <Row gutter={16}>
              <Col span={4}>
                <RespondentCard />
              </Col>
              <Col span={20}>
                <ul>
                  <li>
                    <SkillDomainItem />
                  </li>
                </ul>
              </Col>
            </Row>
          </Wrapper>
        </Container>
      </Main>
    </PageWrapper>
  );
};

const PageWrapper = styled.main`
  background-color: var(--color-primary--5);
`;

const PageTitleWrapper = styled.section`
  padding: 1.6rem;
`;

const PageTitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
`;

const PageTitle = styled.h2`
  color: var(--color-gray--1);
  font-size: 28px;
  text-transform: capitalize;
`;

const Main = styled.section`
  background-color: #fff;
  height: 100vh;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Wrapper = styled.div`
  padding: 3.2rem 0;
`;

// const TableWrapper = styled.div`
//   position: relative;

//   &::before {
//     display: block;
//     content: '';
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: 10;
//     cursor: pointer;
//   }
// `;

// const StyledAverage = styled.span`
//   color: #ffa940;
// `;

export default PersonalResponsePage;
