import React from 'react';
import styled from 'styled-components';

interface ZeroexpoBannerProps {
    isMobile: boolean;
}

interface ZrxpoLogoProps {
    isAbsolute?: boolean;
}

interface BannerMainProps {
    padding?: number;
}

const onClickHandler = () => {
    window.location.assign('https://www.0xpo.com/?utm_source=0x&utm_medium=Banner&utm_campaign=Crossroads');
};

const DesktopBanner: React.FC = () => {
    return (
        <BannerMain>
            <ImageBg />
            <SfbwTag>
                <img
                    src="/images/0xpo/sfbw.svg"
                    alt="SFBW 2022 Logo"
                    height={17}
                    style={{ marginLeft: 8, marginRight: 8 }}
                />
                Official Event
            </SfbwTag>
            <CopyContainer>
                <Description>
                    Crossroads is a free-flowing day of learning, networking, and fun where your future-focused ideas
                    can flow freely between industry leaders, projects, and communities. <br />
                    See you at the Crossroads!
                </Description>
                <Cta onClick={onClickHandler}>
                    <span>Register for your free ticket at 0xpo.com</span>
                </Cta>
            </CopyContainer>
            <ZrxpoLogo />
        </BannerMain>
    );
};

const MobileBanner: React.FC = () => {
    return (
        <BannerMain onClick={onClickHandler} padding={8}>
            <ImageBg />
            <SfbwTag>
                <img
                    src="/images/0xpo/sfbw.svg"
                    alt="SFBW 2022 Logo"
                    height={17}
                    style={{ marginLeft: 4, marginRight: 4 }}
                />
                Official Event
            </SfbwTag>
            <HalfSizeContainer>
                <p>San Francisco, CA</p>
                <span>November 3, 2022</span>
                <ZrxpoLogo isAbsolute={false} />
            </HalfSizeContainer>
            {/* <CopyContainer>
                <Description>
                    <b style={{ fontWeight: 'bold' }}>Register for your free ticket at 0xpo.com</b>
                    Crossroads is a free-flowing day of learning, networking, and fun where your future-focused ideas
                    can flow freely between industry leaders, projects, and communities. <br />
                    See you at the Crossroads!
                </Description>
            </CopyContainer> */}
        </BannerMain>
    );
};

export const ZeroexpoBanner: React.FC<ZeroexpoBannerProps> = ({ isMobile }) => {
    return isMobile ? <MobileBanner /> : <DesktopBanner />;
};

const BannerMain = styled.div<BannerMainProps>`
    min-height: 80px;
    width: 100%;
    max-width: 1280px;
    margin: auto;
    padding: ${({ padding = 0 }) => padding}px;
    background-image: url('/images/0xpo/crossroads.svg');
    background-size: 35%;
    background-position: center center;
    background-repeat-y: no-repeat;
    background-color: black;
    color: white;
    position: relative;
`;
const ImageBg = styled('div')`
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 25%,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 1) 75%,
        rgba(0, 0, 0, 1) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
const SfbwTag = styled('div')`
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    height: 44px;
    display: flex;
    background-color: #0d6efd;
    justify-content: space-around;
    align-items: center;
`;
const CopyContainer = styled('div')`
    color: white;
    height: 100%;
    width: 100%;
    max-width: 816px;
    z-index: 15;
    position: relative;
    display: inline-block;
    width: 100%;
    margin-top: 52px;
`;

const Description = styled('span')`
    line-height: 2;
    color: rgba(255, 255, 255, 0.6);
`;

const Cta = styled('button')`
    background-color: #0d6efd;
    padding: 8px 24px;
    color: white;
    display: block;
    font-size: 20px;
    border: none;
    margin-top: 16px;
    margin-bottom: 32px;
    cursor: pointer;
`;

const ZrxpoLogo = styled.div<ZrxpoLogoProps>`
    background-image: url('/images/0xpo/0xpo.svg');
    position: ${({ isAbsolute = true }) => (isAbsolute ? 'absolute' : 'inline-block')};
    bottom: 0;
    left: 0;
    height: 24px;
    width: 56px;
    background-size: contain;
    background-repeat: no-repeat;
`;

const HalfSizeContainer = styled('div')`
    display: inline-block;
    width: 50%;
    height: 100%;
    position: relative;
    z-index: 10;
`;
