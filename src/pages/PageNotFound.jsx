import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageNotFound = () => {
  return (
    <Box>
      <StyledResult
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </Box>
  );
};

const StyledResult = styled(Result)``;

const Box = styled.div`
  background-color: #fff;
  border-radius: 12px;
  margin-top: 40px;
`;

export default PageNotFound;
