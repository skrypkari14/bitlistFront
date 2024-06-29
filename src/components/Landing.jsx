import {React, useState} from 'react'
import logo from '../img/logo.png'
import { CiSearch } from "react-icons/ci";
import SecondaryBtn from './buttons/SecondaryBtn';
import PrimaryBtn from './buttons/PrimaryBtn';
import { CiMail } from "react-icons/ci";
import slogan from '../img/slogan.png'
import bg_asset_1 from '../img/bg_asset_1.png'
import bg_asset_2 from '../img/bg_asset_2.png'
import sponsor from '../img/sponsor.png'
import Table from './table/Table';
import Canvas from './canvas/Canvas';
import sponsor_asset_1 from '../img/sponsor_asset_1.png'
import sponsor_asset_2 from '../img/sponsor_asset_2.png'
import benefit_1 from '../img/benefit_1.png'
import benefit_2 from '../img/benefit_2.png'
import benefit_3 from '../img/benefit_3.svg'
import benefit_4 from '../img/benefit_4.png'
import benefit_5 from '../img/benefit_5.png'
import benefit_6 from '../img/benefit_6.svg'
import register_asset from '../img/register_asset.png'
import footer_logo from '../img/footer_logo.svg'
import facebook from '../img/facebook.svg'
import twitter from '../img/twitter.png'
import telegram from '../img/telegram.svg'
import static_asset_1 from '../img/statics_asset_1.png'
import static_asset_2 from '../img/statics_asset_2.png'
import { IoMenu } from "react-icons/io5";
import { Drawer } from 'antd';

const Landing = () => {
    const [open, setOpen] = useState(false);

  return (
    <div>
        <header className='h-[101px] fixed z-[110] left-0 right-0 lg:relative bg-gradient-to-r from-transparent via-[#40C1FB] from-transparent'>
            <div className='bg-[#08090B] px-5 xl:px-[80px] 2xl:px-[160px] py-[35px] h-[100px] w-full flex gap-5 items-center justify-end xl:justify-between'>
                <div className='items-center gap-[36px] hidden xl:flex'>
                    <img src={logo} alt='BITLIST'/>
                    <span className='border border-[#252C41] rounded-lg h-[24px]'></span>
                    <div className='bg-[#3D4865] w-[400px] h-[42px] flex items-center rounded-lg border-t border-[#3D4865] px-2 gap-2'>
                        <CiSearch className='text-2xl text-[#B2BEE2]'/>
                        <input className='outline-none bg-transparent text-white w-full' placeholder='Search'/>
                    </div>
                </div>
                <div className='items-center gap-[36px] hidden 2xl:flex'>
                    <div className='flex items-center text-[#464E62] gap-[32px]'>
                        <a href='#' className='hover:text-[#7a8399] transition-all'>Trade</a>
                        <a href='#' className='hover:text-[#7a8399] transition-all'>P2P</a>
                        <a href='#' className='hover:text-[#7a8399] transition-all'>Partners</a>
                        <a href='#' className='hover:text-[#7a8399] transition-all'>Mining</a>
                        <a href='#' className='hover:text-[#7a8399] transition-all'>Academy</a>
                    </div>
                    <span className='border border-[#252C41] rounded-lg h-[24px]'></span>
                    <div className='flex items-center gap-[8px]'>
                        <SecondaryBtn title={'Register'}/>
                        <PrimaryBtn title={'Log In'}/>
                    </div>
                </div>
                <div className='2xl:hidden relative'>
                    <IoMenu className='text-4xl text-white cursor-pointer' onClick={() => {setOpen(!open)}}/>
                    <Drawer title={<img src={logo} alt='BITLIST' className='mx-auto'/>} open={open} onClose={() => {setOpen(false)}}>
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex flex-col items-center text-[#464E62] gap-[32px]'>
                                <a href='#' className='text-xl hover:text-[#7a8399] transition-all'>Trade</a>
                                <a href='#' className='text-xl hover:text-[#7a8399] transition-all'>P2P</a>
                                <a href='#' className='text-xl hover:text-[#7a8399] transition-all'>Partners</a>
                                <a href='#' className='text-xl hover:text-[#7a8399] transition-all'>Mining</a>
                                <a href='#' className='text-xl hover:text-[#7a8399] transition-all'>Academy</a>
                            </div>
                            <div className='flex flex-col items-center gap-[8px]'>
                                <SecondaryBtn title={'Register'}/>
                                <PrimaryBtn title={'Log In'}/>
                            </div>
                        </div>
                    </Drawer>
                </div>
            </div>
        </header>
        <main className='bg-[#08090B] pt-[180px] pb-[80px] px-5 xl:px-[80px] 2xl:px-[160px] relative'>
            <div className='3xl:max-w-[698px] w-full'>
                <img src={slogan} className='3xl:mx-0 mx-auto'/>
                <h1 className='3xl:text-left text-center text-[32px] md:text-[48px] xl:text-[72px] font-medium text-[#D5EAFF] leading-[80px] pt-[24px]'>Buy, trade and store cryptocurrencies</h1>
                <div className='z-[101] bg-[#3D4865] w-[320px] md:w-[480px] h-[42px] flex items-center rounded-lg border-t border-[#3D4865] pl-2 gap-2 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 3xl:left-[160px] 3xl:translate-x-0'>
                        <CiMail className='text-2xl text-[#B2BEE2]'/>
                        <input className='outline-none bg-transparent text-white w-full' placeholder='Example@gmail.com'/>
                        <button style={{ background: 'radial-gradient(100% 100% at 50% 0%, #66CBF9 0%, #0FB5FF 100%)'}} className='h-[42px] w-[105px] rounded-lg text-[#CEE7FF] font-medium'>Sign In</button>
                </div>
                <img src={bg_asset_1} className='z-0 absolute -bottom-20 translate-y-1/2 left-0'/>
            </div>
            <div className='statistics'>
                <img src={static_asset_1} className='absolute -right-10 -top-10 -translate-x-1/2'/>
                <img src={static_asset_2} className='absolute right-0 -bottom-10'/>
                <Canvas className='absolute right-[160px] top-1/2 -translate-y-1/2 z-50' height='283' width='640'/>
            </div>
            <img src={bg_asset_2} className='absolute -top-20 right-0'/>
        </main>
        <section className='py-[100px] px-5 xl:px-[80px] 2xl:px-[160px] bg-[#0B0F15] relative z-[100] border-b border-t border-[#252C41]'>
            <Table/>
            <button className='w-full h-[42px] mt-[16px] bg-gradient-to-r from-[#26314E] to-[#1E253C] text-[#CEE7FF] rounded-lg'>All assets</button>
        </section>
        <section className='py-[88px] bg-[#08090B] px-5 xl:px-[80px] 2xl:px-[160px] flex xl:flex-row flex-col gap-20 items-center justify-between relative'x>
            <div className='flex flex-col max-w-[680px] w-full text-center xl:text-left'>
                <img src={sponsor_asset_2} className='absolute -top-1/2 left-0'/>
                <h4 className='text-[#D5EAFF] text-[32px] md:text-[48px]'>
                    Bitles is your reliable guide in the world of digital assets
                </h4>
                <p className='text-[#464E62] text-[12px] md:text-[16px] pt-5 xl:pt-0'>
                The Bitles app is a comprehensive solution for trading digital assets. Buy and sell cryptocurrencies quickly and openly, comfortably and safely from anywhere in the world.
                </p>
            </div>
            <div className='relative'>
                <img src={sponsor_asset_1} className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'/>
                <img src={sponsor}/>
            </div>
        </section>
        <section className='py-[1px] bg-gradient-to-r from-transparent via-[#40C1FB] from-transparent relative z-[102]'> 
            <div className='h-full px-5 xl:px-[80px] 2xl:px-[160px] py-[88px] bg-[#080A0C]'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-[80px] text-center lg:text-left justify-items-center'>
                    <div className='max-w-[307px] flex flex-col items-center lg:items-start'>
                        <img src={benefit_1}/>
                        <div className='pt-[24px]'>
                            <h4 className='text-[20px] text-[#D5EAFF] font-medium'>User Safe Asset Fund (SAFU)world.</h4>
                            <p className='text-[18px] text-[#464E62] pt-[8px]'>Bitlist holds 10% of all trading fees in a protected asset fund to protect a portion of user funds.</p>
                        </div>
                    </div>
                    <div className='max-w-[307px] flex flex-col items-center lg:items-start'>
                        <img src={benefit_2}/>
                        <div className='pt-[24px]'>
                            <h4 className='text-[20px] text-[#D5EAFF] font-medium'>User Access Control</h4>
                            <p className='text-[18px] text-[#464E62] pt-[8px]'>Personalized access control allows you to limit the devices and addresses that can access your account.</p>
                        </div>
                    </div>
                    <div className='max-w-[307px] flex flex-col items-center lg:items-start'>
                        <img src={benefit_3}/>
                        <div className='pt-[24px]'>
                            <h4 className='text-[20px] text-[#D5EAFF] font-medium'>Improved data encryption</h4>
                            <p className='text-[18px] text-[#464E62] pt-[8px]'>Your transaction data is encrypted - only you can access your personal data.</p>
                        </div>
                    </div>
                    <div className='max-w-[307px] flex flex-col items-center lg:items-start'>
                        <img src={benefit_4}/>
                        <div className='pt-[24px]'>
                            <h4 className='text-[20px] text-[#D5EAFF] font-medium'>Support 24/7</h4>
                            <p className='text-[18px] text-[#464E62] pt-[8px]'>24/7 real-time support is always ready to help you.</p>
                        </div>
                    </div>
                    <div className='max-w-[307px] flex flex-col items-center lg:items-start'>
                        <img src={benefit_5}/>
                        <div className='pt-[24px]'>
                            <h4 className='text-[20px] text-[#D5EAFF] font-medium'>Fast replineshments and withdraws</h4>
                            <p className='text-[18px] text-[#464E62] pt-[8px]'>Transfer funds to and from your accounts quickly and easily.</p>
                        </div>
                    </div>
                    <div className='max-w-[307px] flex flex-col items-center lg:items-start'>
                        <img src={benefit_6}/>
                        <div className='pt-[24px]'>
                            <h4 className='text-[20px] text-[#D5EAFF] font-medium'>Comfortable P2P platform</h4>
                            <p className='text-[18px] text-[#464E62] pt-[8px]'>Top up your account in any convenient way on the P2P platform at favorable rates.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-[100px] flex flex-col items-center justify-center gap-[50px] bg-[#08090B] border-b'>
            <img src={register_asset} className='absolute'/>
            <h4 className='font-medium text-[#D5EAFF] text-[32px] md:text-[48px] max-w-[700px] text-center'>
            Register your account now and start to trade
            </h4>
            <div className='z-[101] bg-[#3D4865] w-[320px] md:w-[480px] h-[42px] flex items-center rounded-lg border-t border-[#3D4865] pl-2 gap-2'>
                        <CiMail className='text-2xl text-[#B2BEE2]'/>
                        <input className='outline-none bg-transparent text-white w-full' placeholder='Example@gmail.com'/>
                        <button style={{ background: 'radial-gradient(100% 100% at 50% 0%, #66CBF9 0%, #0FB5FF 100%)'}} className='h-[42px] w-[105px] rounded-lg text-[#CEE7FF] font-medium'>Sign In</button>
            </div>
        </section>
        <footer className='px-5 xl:px-[80px] 2xl:px-[160px] py-[60px] bg-[#08090B] relative z-[101]'>
            <div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10'>
                <div className='flex flex-col items-center md:items-start gap-[48px]'>
                    <a href='#'>
                        <img src={footer_logo}/>
                    </a>
                    <div className='flex items-center gap-[16px]'>
                        <a href='#'>
                            <img src={facebook}/>
                        </a>
                        <a href='#'>
                            <img src={twitter}/>
                        </a>
                        <a href='#'>
                            <img src={telegram}/>
                        </a>
                    </div>
                    <div className='flex gap-[8px]'>
                        <SecondaryBtn title={'Register'}/>
                        <PrimaryBtn title={'Log In'}/>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-[55px]'>
                    <div className='flex flex-col gap-[28px] text-[#464E62]'>
                        <a className='hover:text-[#7a8399] transition-all' href='#'>Trade</a>
                        <a className='hover:text-[#7a8399] transition-all' href='#'>P2P</a>
                        <a className='hover:text-[#7a8399] transition-all' href='#'>Partners</a>
                        <a className='hover:text-[#7a8399] transition-all' href='#'>Mining</a>
                    </div>
                    <div className='flex flex-col gap-[28px] text-[#464E62]'>
                        <a className='hover:text-[#7a8399] transition-all' href='#'>Privacy policy</a>
                        <a className='hover:text-[#7a8399] transition-all' href='#'>Terms of rules</a>
                    </div>
                </div>
            </div>
            <p className='text-center pt-[60px] text-[#27314A] text-[18px]'>Bitlist© All Rights Reserved</p>
        </footer>
    </div>
  )
}

export default Landing