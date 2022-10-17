import useEditUserInfo from '../useCases/useEditUserInfo';
import EditUserInfoView from '../view/EditUserInfoView';

export function EditUserInfo() {
  const props = useEditUserInfo();
  return <EditUserInfoView props={props} />;
}
