import { connect } from 'react-redux';
import { TRootState } from '../../store';
import { logOut } from '../../state/user';

const mapStateToProps = (state: TRootState) => ({
  user: state.user.currentUser,
});

const mapDispatchToProps = {
  logOut,
};

export type TConnectableProps =
  & ReturnType<typeof mapStateToProps>
  & typeof mapDispatchToProps;

export const connectable = connect(
  mapStateToProps,
  mapDispatchToProps,
);
