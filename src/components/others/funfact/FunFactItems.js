import React, { Component } from 'react'
import CountUp from 'react-countup';

export default class FunFactItems extends Component {
    render() {
        return (
            <>
                <div className="col-lg-3">
                    <div className="counter-item counter-item-color-1">
                        <h4 className="counter__title">
                            <CountUp start={0}
                                end={867801}
                                duration={8}
                                separator=""
                                decimal=","
                                prefix=" "
                                suffix=" "
                            />
                        </h4>
                        <p className="counter__meta">Confirmed cases</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="counter-item counter-item-color-2">
                        <h4 className="counter__title">
                            <CountUp start={0}
                                end={30801}
                                duration={8}
                                separator=""
                                decimal=","
                                prefix=" "
                                suffix=" "
                            />
                        </h4>
                        <p className="counter__meta">Deaths</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="counter-item counter-item-color-3">
                        <h4 className="counter__title">
                            <CountUp start={0}
                                end={830220}
                                duration={8}
                                separator=""
                                decimal=","
                                prefix=" "
                                suffix=" "
                            />
                        </h4>
                        <p className="counter__meta">Recovered</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="counter-item counter-item-color-4">
                        <h4 className="counter__title">
                            <CountUp start={0}
                                end={37890}
                                duration={8}
                                separator=""
                                decimal=","
                                prefix=" "
                                suffix=" "
                            />
                        </h4>
                        <p className="counter__meta">Active</p>
                    </div>
                </div>
            </>
        )
    }
}
