import React, { Component } from 'react'
import FunFacts from '../others/funfact/FunFacts'
import ParticleStyle2 from '../others/particle/ParticleStyle2'
import SectionTitle from '../common/SectionTitle'

export default class BannerHome3 extends Component {
    render() {
        return (
            <>
                <section className="slider-area remove_shape banner-area-2 text-center">
                    <div className="single-slide-item banner-item-3">
                        <ParticleStyle2 />
                        <SectionTitle title="Coronavirus (COVID-19) Worldwide Situation" />
                        <FunFacts />
                    </div>
                </section>
            </>
        )
    }
}
