import React, { Component } from 'react';
import Button from './widgets/Button';
import ButtonGroup from './widgets/ButtonGroup';
import styles from './Toolbar.less';

export default class Toolbar extends Component {
  static propTypes = {
    view: React.PropTypes.string.isRequired,
    views: React.PropTypes.arrayOf(
      React.PropTypes.string,
    ).isRequired,
    label: React.PropTypes.node.isRequired,
    messages: React.PropTypes.object,
    onNavigate: React.PropTypes.func.isRequired,
    onViewChange: React.PropTypes.func.isRequired,
  }

  createAppointment = () => alert('Pretend this is a create appointment dialog!');

  navPrev = () => this.props.onNavigate('PREV');

  navNext = () => this.props.onNavigate('NEXT');

  navToday = () => this.props.onNavigate('TODAY');

  refresh = () => console.log('Dummy refresh!');

  view = (view) => this.props.onViewChange(view)

  render() {
    const { label } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.currentdate}>{label}</span>
          <ButtonGroup style={{ padding: '0 3px' }}>
            <Button onClick={this.navPrev}>&lt;</Button>
            <Button onClick={this.navNext}>&gt;</Button>
          </ButtonGroup>
          <ButtonGroup style={{ padding: '0 3px' }}>
            <Button onClick={this.createAppointment}>+ Appointment</Button>
            <Button onClick={this.navToday}>Today</Button>
            <Button onClick={this.refresh}>Refresh</Button>
          </ButtonGroup>
          <input type='search' />
        </div>
        <span className={styles.viewPicker}>
          View:
          <ButtonGroup style={{ padding: '0 3px' }}>
            <Button>7 Days</Button>
            <Button>Multi-Providers</Button>
          </ButtonGroup>
        </span>
      </div>
    )
  }
}
