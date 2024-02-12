/**
 * Internal Dependencies.
 */
import { EditableTable, MessageBox } from "../../components";
import useAppData from "../../store/useAppData";

const PortfolioTrackerPage = () => {
  const { userData } = useAppData();

  return userData.isLoggedIn ? (
    <EditableTable />
  ) : (
    <MessageBox
      message="Please login to use this service."
      displayHomeBtn={true}
      displayLoginBtn={true}
    />
  );
};

export default PortfolioTrackerPage;
