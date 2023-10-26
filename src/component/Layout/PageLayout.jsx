import PropTypes from 'prop-types';
import {
  Container,
  Main,
  PageTitle,
  PageTitleWrapper,
  PageWrapper,
} from './PageLayoutStyle';

const PageLayout = ({ children, pageTitle }) => {
  return (
    <PageWrapper>
      <PageTitleWrapper>
        <Container>
          <PageTitle>{pageTitle}</PageTitle>
        </Container>
      </PageTitleWrapper>
      <Main>
        <Container>{children}</Container>
      </Main>
    </PageWrapper>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string,
};

export default PageLayout;
