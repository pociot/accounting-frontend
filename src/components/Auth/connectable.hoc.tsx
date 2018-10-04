import { connect } from 'react-redux';
import { TRootState } from '../../store';

const mapStateToProps = (state: TRootState) => ({
  user: state.user.currentUser,
  isFetching: state.user.isFetching,
  error: state.user.error,
});

const mapDispatchToProps = {

};

export type TConnectableProps =
  & ReturnType<typeof mapStateToProps>
  & typeof mapDispatchToProps;

export const connectable = connect(
  mapStateToProps,
  mapDispatchToProps,
);
