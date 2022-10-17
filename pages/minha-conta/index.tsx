import Container from '@/components/container';
import Layout from '@/components/layout';
import NavBar from '@/components/NavBar';
import {EditUserInfo} from 'modules/user/controller/EditUserInfo';
import type {ReactElement} from 'react';

function MyAccount() {
  return <EditUserInfo />;
}

MyAccount.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout pageTitle="Editar conta">
      <Container>
        <NavBar />
        {page}
      </Container>
    </Layout>
  );
};

export {MyAccount as default};
