import { connect } from 'react-redux';
import { TRootState } from '../../store';
import { getUser } from '../../state/user'

const mapStateToProps = (state: TRootState) => ({

});

const mapDispatchToProps = {
  getUser
};

export type TConnectableProps =
  & ReturnType<typeof mapStateToProps>
  & typeof mapDispatchToProps;

export const Connectable = connect(
  mapStateToProps,
  mapDispatchToProps
);