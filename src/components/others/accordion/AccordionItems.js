import React, { Component } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


export default class AccordionItems extends Component {
    render() {
        return (
            <>
                <div className="col-lg-7">
                    <div className="accordion-wrap">
                        <Accordion allowMultipleExpanded preExpanded={[0]} className="accordion" id="accordionExample">

                            <AccordionItem className="card">
                                <AccordionItemHeading className="card-header" id="headingSix">
                                    <AccordionItemButton>
                                        What is a novel coronavirus?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.Proce Aran Manu Proucs Rahe Conen Cuve Manu Produ Rahe Cuvaes Man
                                </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="card">
                                <AccordionItemHeading className="card-header" id="headingSix">
                                    <AccordionItemButton>
                                        Hwo Is This Coronavirus Spread?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                                        coffee nulla assumenda shoreditch et.Proce Aran Manu Proucs Rahe Conen Cuve Manu
                                        Produ Rahe Cuvaes Man
                                </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="card">
                                <AccordionItemHeading className="card-header" id="headingSix">
                                    <AccordionItemButton>
                                        What Are The Symptoms Of COVID-19?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                                        coffee nulla assumenda shoreditch et.Proce Aran Manu Proucs Rahe Conen Cuve Manu
                                        Produ Rahe Cuvaes Man
                                </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="card">
                                <AccordionItemHeading className="card-header" id="headingSix">
                                    <AccordionItemButton>
                                        Should I wear a mask to protect myself?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                                        coffee nulla assumenda shoreditch et.Proce Aran Manu Proucs Rahe Conen Cuve Manu
                                        Produ Rahe Cuvaes Man
                                </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="card">
                                <AccordionItemHeading className="card-header" id="headingSix">
                                    <AccordionItemButton>
                                        Should I Be Tested For COVIDE-19?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                                        coffee nulla assumenda shoreditch et.Proce Aran Manu Proucs Rahe Conen Cuve Manu
                                        Produ Rahe Cuvaes Man
                                </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="card">
                                <AccordionItemHeading className="card-header" id="headingSix">
                                    <AccordionItemButton>
                                        What is the source of the virus?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                                        coffee nulla assumenda shoreditch et.Proce Aran Manu Proucs Rahe Conen Cuve Manu
                                        Produ Rahe Cuvaes Man
                                </div>
                                </AccordionItemPanel>
                            </AccordionItem>

                        </Accordion>
                    </div>
                </div>
            </>
        )
    }
}
