import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CustomModal from '../../src/shared/customModal/CustomModal';
import { PrimaryButton } from '../../src/styles/buttons.sc';

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const SingleButton = styled.div`
  min-width: 400px;
  margin: 10px 0;
`;

class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render() {
    return (
      <ButtonContainer>
        <SingleButton>
          <PrimaryButton
            onClick={() => { this.setState({ showModal: true }); }}
          >
            Click for Modal
          </PrimaryButton>
          <CustomModal
            show={this.state.showModal}
            onHide={() => { this.setState({ showModal: false }); }}
          />
        </SingleButton>
      </ButtonContainer>
    );
  }
}

Modals.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  close: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  titleKey: PropTypes.string,
  headerColor: PropTypes.string,
};

Modals.defaultProps = {
  show: false,
  onHide: null,
  close: false,
  title: 'WARNING',
  children: null,
  titleKey: null,
  headerColor: null,
};

export default Modals;
