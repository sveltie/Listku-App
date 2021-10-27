import React from "react";
import { HomeWrapper } from "./pages.style";
import illust from '../assets/home-illust.svg'
import { Link, Redirect } from "react-router-dom";
import { useGlobalContext } from '../context/app.context';

function Home() {
    const { user } = useGlobalContext();

    return (
      <React.Fragment>
        {user && <Redirect to='/dashboard' />}
        <HomeWrapper>
          <div className='container page'>
            <div className='info'>
              <h1>
                TO-DO APP
              </h1>
              <p>
                The main API for Listku app built with Express.
                Listku is an application that is made with a purpose
                to track user to-do/task list, schedule, etc like any
                basic to-do application. Users will be able to manage,
                edit, delete, and group their tasks based on the task
                priority or simply the CRUD functionality.
              </p>

              <Link to='/register' className='btn hero-btn'>
                Login
              </Link>
              <div class="divider" />
              <a href="https://github.com/Yukii2k/Listku-Server" className='btn contri-btn'>
                Contribute
              </a>
            </div>
            <img className="img main-img" src={illust} alt='illust'></img>
          </div>
          <div className="home-img">
            <img className="img mobile-img" src={illust} alt='illust'></img>
          </div>
        </HomeWrapper>
        <div className="svg-wave">
          <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,100 0,100 C 68.3885065976076,111.5886545813294 136.7770131952152,123.17730916265877 185,114 C 233.2229868047848,104.82269083734123 261.28045381674684,74.87941793069429 301,76 C 340.71954618325316,77.12058206930571 392.1011715377974,109.30501911456406 460,120 C 527.8988284622026,130.69498088543594 612.3148600320632,119.90050561104947 666,121 C 719.6851399679368,122.09949438895053 742.63938833395,135.09295844123812 787,129 C 831.36061166605,122.90704155876188 897.1275866321371,97.72766062399802 955,100 C 1012.8724133678629,102.27233937600198 1062.8502651375018,131.99639906276977 1115,132 C 1167.1497348624982,132.00360093723023 1221.4713528178568,102.28674312492292 1276,92 C 1330.5286471821432,81.71325687507708 1385.2643235910716,90.85662843753855 1440,100 C 1440,100 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#404eed66" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,400 C 0,400 0,200 0,200 C 57.9706498951782,209.51658650881734 115.9412997903564,219.0331730176347 167,223 C 218.0587002096436,226.9668269823653 262.2054507337526,225.38389443827847 307,219 C 351.7945492662474,212.61610556172153 397.2368972746332,201.43124922925145 460,202 C 522.7631027253668,202.56875077074855 602.8469601677149,214.89110864471576 654,214 C 705.1530398322851,213.10889135528424 727.3752620545073,199.00431619188558 782,205 C 836.6247379454927,210.99568380811442 923.6519916142558,237.09162658774198 974,230 C 1024.3480083857442,222.90837341225802 1038.0167714884694,182.6291774571464 1093,178 C 1147.9832285115306,173.3708225428536 1244.2809224318657,204.39166358367245 1309,214 C 1373.7190775681343,223.60833641632755 1406.8595387840671,211.8041682081638 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#404eed88" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><path d="M 0,400 C 0,400 0,300 0,300 C 50.222518189665806,309.66461955851526 100.44503637933161,319.32923911703045 152,323 C 203.5549636206684,326.67076088296955 256.44237267233933,324.34766309039344 317,313 C 377.55762732766067,301.65233690960656 445.7854729313109,281.28010852139596 497,291 C 548.2145270686891,300.71989147860404 582.415735602417,340.53190282402267 635,334 C 687.584264397583,327.46809717597733 758.5515846590208,274.59228018251326 810,274 C 861.4484153409792,273.40771981748674 893.3779257614997,325.09897644592434 950,336 C 1006.6220742385003,346.90102355407566 1087.936712294981,317.0118140337895 1142,301 C 1196.063287705019,284.9881859662105 1222.875225058577,282.8537674189173 1268,285 C 1313.124774941423,287.1462325810827 1376.5623874707117,293.57311629054135 1440,300 C 1440,300 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#404eedff" class="transition-all duration-300 ease-in-out delay-150 path-2"></path></svg>
        </div>
      </React.Fragment>
    )
}

export default Home;