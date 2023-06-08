import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Badge from "../../../../components/custom/badge";
import Flex from "../../../../components/basic/flex";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Icon from "../../../../components/custom/icon";

import Image1 from "../../../../assets/img/portfolio/1.png";
import Image2 from "../../../../assets/img/portfolio/2.png";
import Image3 from "../../../../assets/img/portfolio/3.png";

import "swiper/css";
import "swiper/css/pagination";

import styled from "styled-components";
import Link from "../../../../components/basic/link";
import { GV } from "../../../../utils/style.util";

const Card = styled.div<{ bg?: string }>`
    position: relative;
    ${({ bg }) => bg ? `background: url(${bg});` : ``}
    background-size: cover;
    background-position: center;
    width: 100%;
    padding-bottom: 60%;
    border-radius: 3rem;
    overflow: hidden;
    text-align: left;

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #1C1C1C;
        opacity: 0.5;
        content: "";
    }

    & > div {
        position: relative;
        z-index: 3;
    }

    @media (max-width: 768px) {
        border-radius: 1rem;
    }
`

const SwiperContainer = styled.div`
    width: 100%;
    height: 50vw;

    & .swiper-slide-active {
        z-index: 5;
    }

    .swiper-slide {
        > div:last-child {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            content: "";
        }

        &.swiper-slide-active {
            > div:first-child {
                transform: scale(1.4);
            }
        }
        &:not(.swiper-slide-active) {
            > div:last-child {
                display: none;
            }
        }
    }
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 7rem;

    @media (max-width: 1440px) {
        margin-left: 0;
    }

    @media (max-width: 600px) {
        > div:first-child {
            display: none;
        }
    }
`

const PrevButton = styled.div`
    position: relative;
    cursor: pointer;

    &:after {
        position: absolute;
        top: 50%;
        left: 0;
        z-index: -1;
        transform: translate(-40%, -50%);
        width: 30px;
        height: 30px;
        background: ${GV("danger")};
        border-radius: 50%;
        content: "";
    }
`

const NextButton = styled.div`
    position: relative;
    cursor: pointer;

    &:after {
        position: absolute;
        top: 50%;
        right: 0;
        z-index: -1;
        transform: translate(40%, -50%);
        width: 30px;
        height: 30px;
        background: ${GV("danger")};
        border-radius: 50%;
        content: "";
    }
`

const RecentWorkSection = () => {

    const onSlidePrev = () => {
        const prevBtn = document.querySelector('.swiper-button-prev') as HTMLElement;
        prevBtn?.click();
    }

    const onSlideNext = () => {
        const nextBtn = document.querySelector('.swiper-button-next') as HTMLElement;
        nextBtn?.click();
    }

    return (
        <Section>
            <Flex $style={{ fDirection: "column", vAlign: "center", gap: "1rem" }}>
                <Badge>Our Recent Work</Badge>
                <Heading level={1} $style={{ align: "center" }}>Portfolio</Heading>
                <P $style={{ align: "center" }}>Build. Launch. Grow</P>
            </Flex>
            <SwiperContainer>
                <Swiper
                    slidesPerView={2}
                    loop={true}
                    centeredSlides={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    grabCursor={true}
                >
                    <SwiperSlide>
                        <Card bg={Image1}></Card>
                        <Flex
                            $style={{
                                fDirection: "column",
                                vAlign: "flex-start",
                                hAlign: "center",
                                gap: "2rem",
                                w: "65%",
                                queries: {
                                    767: {
                                        gap: "1rem"
                                    }
                                }
                            }}
                        >
                            <Heading level={3}>Digital Transformation</Heading>
                            <P
                                $style={{
                                    align: "left",
                                    queries: {
                                        768: {
                                            size: "0.5rem"
                                        }
                                    }
                                }}
                            >Develop a plan for the pace of digital. Inletsky drives digital transformation programs with a complete vision for change.</P>
                            <Link to="" $style={{
                                color: GV("danger"),
                                textTransform: "uppercase"
                            }}>Read more  →</Link>
                        </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card bg={Image2}></Card>
                        <Flex
                            $style={{
                                fDirection: "column",
                                vAlign: "flex-start",
                                hAlign: "center",
                                gap: "2rem",
                                w: "65%",
                                queries: {
                                    767: {
                                        gap: "1rem"
                                    }
                                }
                            }}
                        >
                            <Heading level={3}>Digital Transformation</Heading>
                            <P
                                $style={{
                                    align: "left",
                                    queries: {
                                        768: {
                                            size: "0.5rem"
                                        }
                                    }
                                }}
                            >Develop a plan for the pace of digital. Inletsky drives digital transformation programs with a complete vision for change.</P>
                            <Link to="" $style={{
                                color: GV("danger"),
                                textTransform: "uppercase"
                            }}>Read more  →</Link>
                        </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card bg={Image3}></Card>
                        <Flex
                            $style={{
                                fDirection: "column",
                                vAlign: "flex-start",
                                hAlign: "center",
                                gap: "2rem",
                                w: "65%",
                                queries: {
                                    767: {
                                        gap: "1rem"
                                    }
                                }
                            }}
                        >
                            <Heading level={3}>Digital Transformation</Heading>
                            <P
                                $style={{
                                    align: "left",
                                    queries: {
                                        768: {
                                            size: "0.5rem"
                                        }
                                    }
                                }}
                            >Develop a plan for the pace of digital. Inletsky drives digital transformation programs with a complete vision for change.</P>
                            <Link to="" $style={{
                                color: GV("danger"),
                                textTransform: "uppercase"
                            }}>Read more  →</Link>
                        </Flex>
                    </SwiperSlide>
                </Swiper>
            </SwiperContainer>
            <Flex>
                <PrevButton onClick={onSlidePrev}>
                    <Icon icon="ArrowLeft" />
                </PrevButton>
                <NextButton onClick={onSlideNext}>
                    <Icon icon="ArrowRight" />
                </NextButton>
            </Flex>
        </Section>
    )
}

export default RecentWorkSection;