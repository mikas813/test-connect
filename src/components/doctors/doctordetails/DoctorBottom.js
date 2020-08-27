import React, { Component } from 'react'
import DoctorBlogs from './relatedblog/DoctorBlogs'
import {InstituitionForm} from '../../formMap/forms/InstitutionForm'

export default class DoctorBottom extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="author-about-content padding-top-45px">
                            <h3 className="widget-title font-size-26">About Dr. Alex Smith</h3>
                            <div className="section-description pt-2">
                                <p className="section__desc">
                                    See-through delicate embroidered organza blue lining luxury acetate-mix
                                    stretch pleat detailing. Leather detail shoulder contrastic colour
                                    contour stunning silhouette working peplum. Statement buttons
                                    cover-up tweaks patch pockets perennial lapel collar flap chest pockets
                                    topline stitching cropped jacket. Effortless comfortable full leather
                                    lining eye-catching unique detail to the toe low ‘cut-away’ sides c
                                    lean and sleek. Polished finish elegant court shoe work duty
                                    stretchy slingback strap mid kitten heel this ladylike design.
                        </p>
                                <p className="section__desc pt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                                    commodi consequuntur, cum distinctio dolores esse eveniet, explicabo
                                    facilis incidunt minima molestias necessitatibus
                                    numquam quia sit suscipit vel vero voluptates voluptatum?
                        </p>
                            </div>
                            <h3 className="widget-title font-size-26">Topics by Dr. Alex Smith</h3>
                            <div className="team-post-wrap mt-4">
                                <div className="row">

                                    <DoctorBlogs />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <InstituitionForm />
                    </div>
                </div>
            </>
        )
    }
}
