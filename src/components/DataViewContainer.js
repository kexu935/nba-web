import React from 'react';
import _ from 'lodash';
import { ShotChart } from './ShotChart'
import { CountSlider } from './CountSlider'
import { Radio, Row, Col, Switch } from 'antd';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
        displayTooltip: true,
    }

    onCountSliderChange = (count) => {
        this.setState({
            minCount: count,
        });
    }

    onChartTypeChange = (e) => {
        this.setState({
            chartType: e.target.value
        });
    }

    onTooltipChange = (displayTooltip) => {
        this.setState({displayTooltip});
    }

    render() {
        return (
            <div className='data-view'>
                <ShotChart playerId={this.props.playerId}
                           minCount={this.state.minCount}
                           chartType={this.state.chartType}
                           displayTooltip={this.state.displayTooltip}
                />
                <div className='filters'>
                    {this.state.chartType === 'hexbin' ?
                    <CountSlider onCountSliderChange = {_.debounce(this.onCountSliderChange,500)}/> : null}
                    <br/>
                    <Row>
                        <Col span={9}>
                            <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                                <Radio value='hexbin'>Hexbin</Radio>
                                <Radio value='scatter'>Scatter</Radio>
                            </RadioGroup>
                        </Col>
                        <Col span={4}>
                            <Switch onChange={this.onTooltipChange} checkedChildren="on" unCheckedChildren="off" defaultChecked />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}