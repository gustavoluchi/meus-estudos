import Container from '@/components/container';
import Header from '@/components/header';
import Layout from '@/components/layout';
import {EditUserInfo} from 'modules/user/controller/EditUserInfo';
import type {ReactElement} from 'react';

function MyAccount() {
  return <EditUserInfo />;
}

MyAccount.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout pageTitle="Editar conta">
      <Container>
        <Header />
        {page}
      </Container>
    </Layout>
  );
};

export {MyAccount as default};
