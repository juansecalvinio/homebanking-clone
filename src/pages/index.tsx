import { Container } from "@chakra-ui/react";
import { Header, PageContainer } from "components";
import { AccountsInfo } from "components/AccountsInfo";
import { ActionsButtons } from "components/ActionsButtons";
import { CreditCards } from "components/CreditCards";
const IndexPage = () => (
  <Container as="main" maxW={"md"} h={"100%"} position={"relative"}>
    <Header />
    <PageContainer>
      <AccountsInfo />
      <ActionsButtons />
      <CreditCards />
    </PageContainer>
  </Container>
);

export default IndexPage;
