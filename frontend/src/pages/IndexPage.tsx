import React, { FC } from 'react'

const IndexPage:FC = () => {
  return (
    <main>
  
      {/* **************** MAIN CONTENT START **************** */}

      {/* Main banner START */}
      <section className="pt-5 pb-0 position-relative">

        {/* Container START */}
        <div className="container">
          {/* Row START */}
          <div className="row text-center position-relative z-index-1">
            <div className="col-lg-12 mx-auto">
              {/* Heading */}
              <h1 className="display-3">Kerala2.com - All information about Kerala towns.</h1>
              <p className="lead mal">നിങ്ങളുടെ അടുത്തുള്ള നഗരത്തെക്കുറിച്ചുള്ള എല്ലാ വിവരങ്ങളും </p>
              <div className="d-sm-flex justify-content-center">
                {/* button */}
                <button className="btn btn-primary">Sign up free</button>
                <div className="mt-2 mt-sm-0 ms-sm-3">
                  {/* Rating START */}
                  <div className="hstack justify-content-center justify-content-sm-start gap-1">
                    <div><i className="fa-solid fa-star text-warning"></i></div>
                    <div><i className="fa-solid fa-star text-warning"></i></div>
                    <div><i className="fa-solid fa-star text-warning"></i></div>
                    <div><i className="fa-solid fa-star text-warning"></i></div>
                    <div><i className="fa-solid fa-star-half-stroke text-warning"></i></div>
                  </div>
                  {/* Rating END */}
                  <i>"I can't believe it's free!"</i>
                </div>
              </div>
            </div>
          </div>
          {/* Row END */}
        </div> 
        {/* Container END */}

        {/* Svg decoration START */}
        <div className="position-absolute top-0 end-0 mt-5 pt-5">
          <img className="h-300px blur-9 mt-5 pt-5" src="assets/images/elements/07.svg" alt="" />
        </div>
        <div className="position-absolute top-0 start-0 mt-n5 pt-n5">
          <img className="h-300px blur-9" src="assets/images/elements/01.svg" alt="" />
        </div>
        <div className="position-absolute top-50 start-50 translate-middle">
          <img className="h-300px blur-9" src="assets/images/elements/04.svg" alt="" />
        </div>
        {/* Svg decoration END */}
        
      </section>
      {/* Main banner END */}

      <section>
        <div className="py-5" style={{backgroundImage:`url(assets/images/bg/06.jpg)`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className="container">
              <div className="row justify-content-center py-5">
                <div className="col-md-6 text-center">
                {/* Title */}
                <h1 className="text-white">Search your town and find what is new.</h1>
                <p className="mb-4 text-white">For who thoroughly her boy estimating conviction.</p>
                {/* Search form START */}
                <form className="rounded position-relative">
                  <input className="form-control form-control-lg ps-5" type="search" placeholder="Search..." aria-label="Search" />
                  <button className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y" type="submit"><i className="bi bi-search fs-5 ps-1"> </i></button>
                </form>
                {/* Search form END */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Messaging feature START */}
      <section className="py-4 py-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            {/* Title */}
            <div className="col-lg-12 text-center mb-4">
              <h2 className="h1">More than Listing</h2>
              <p>Express besides it present if at an opinion visitor. </p>
            </div>
          </div>
          {/* Row START */}
          <div className="row g-4 g-lg-5">
            {/* Feature START */}
            <div className="col-md-4 text-center">
              <img className="h-100px mb-4" src="assets/images/elements/02.svg" alt="" />
              <h4>Real Estate Buy and Sell</h4>
              <p className="mb-0 mal">നിങ്ങൾക്ക് ഭൂമി, വീട്, വാടക എന്നിവ ലിസ്റ്റ് ചെയ്യാനും തിരയാനും കഴിയും.</p>
            </div>
            {/* Feature END */}

            {/* Feature START */}
            <div className="col-md-4 text-center">
              <img className="h-100px mb-4" src="assets/images/elements/01.svg" alt="" />
              <h4>Vechile Buy and Sell</h4>
              <p className="mb-0 mal">നിങ്ങൾക്ക് എല്ലാത്തരം വാഹന വിൽപ്പനകളും ലിസ്റ്റ് ചെയ്യാനും തിരയാനും കഴിയും.</p>
            </div>
            {/* Feature END */}

            {/* Feature START */}
            <div className="col-md-4 text-center">
              <img className="h-100px mb-4" src="assets/images/elements/07.svg" alt="" />
              <h4>Local News and Infrormation</h4>
              <p className="mb-0 mal">നിങ്ങളുടെ നാട്ടിലെ ഏറ്റവും പുതിയ വാർത്തകളും വിവരങ്ങളും കണ്ടെത്താനാകും</p>
            </div>
            {/* Feature END */}
          </div>
          {/* Row START */}
        </div>
      </section>
      {/* Messaging feature END */}

      {/* features START */}
      <section className="py-4 py-sm-5">
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-center">
            {/* Title */}
            <div className="col-lg-4">
              <h2 className="h1">Take a look at our big set of features</h2>
              <p className="mb-4">Express besides it present if at an opinion visitor. </p>
              <a className="btn btn-dark" href="#">Download now</a>
            </div>
            {/* Feature item START */}
            <div className="col-lg-8">
              <div className="card card-body bg-mode shadow-none border-0 p-4 p-sm-5 pb-sm-0 overflow-hidden">
                <div className="row g-4">
                  <div className="col-md-6">
                    {/* Info */}
                    <img className="h-50px" src="assets/images/elements/05.svg" alt="" />
                    <h4 className="mt-4">Built-in digital wallet</h4>
                    <p className="mb-0">Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls.</p>
                  </div>
                  <div className="col-md-6 text-end"> 
                    {/* image */}
                    {/* iphone-x mockup START */}
                      <div className="iphone-x iphone-x-small iphone-x-half mb-n5 mt-0" style={{background: `url(assets/images/mockup/app-placeholder3.jpg)`, backgroundSize: '100%'}}>
                        <i></i>
                        <b></b>
                      </div>
                      {/* iphone-x mockup END */}
                  </div>
                </div>
              </div>
            </div>
            {/* Feature item END */}

            {/* Feature item START */}
            <div className="col-md-4">
              <div className="card card-body bg-mode shadow-none border-0 p-4 p-lg-5">
                {/* Image */}
                <div>
                  <img className="h-50px" src="assets/images/elements/03.svg" alt="" />
                </div>
                {/* Info */}
                <h4 className="mt-4">Safer communities</h4>
                <p className="mb-0 mal">Departure defective arranging rapturous did believe him all had supported simple set nature.</p>
              </div>
            </div>
            {/* Feature item START */}

            <div className="col-md-4">
              <div className="card card-body bg-mode shadow-none border-0 p-4 p-lg-5">
                {/* Image */}
                <div>
                  <img className="h-50px" src="assets/images/elements/09.svg" alt="" />
                </div>
                {/* Info */}
                <h4 className="mt-4">Genuine users</h4>
                <p className="mb-0 mal">Satisfied conveying a dependent contented he gentleman agreeable do be warrant removed.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-body bg-mode shadow-none border-0 p-4 p-lg-5">
                {/* Image */}
                <div>
                  <img className="h-50px" src="assets/images/elements/06.svg" alt="" />
                </div>
                {/* Info */}
                <h4 className="mt-4">Stronger communities</h4>
                <p className="mb-0 mal">Meant balls it if up doubt small purse. Required his you put the outlived answered position.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* features END */}

      {/* Get Discovered START */}
      <section className="py-4 py-sm-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 ms-auto">
              <div className="row g-4 align-items-center">
                <div className="col-md-5 col-lg-5 position-relative">
                  {/* Image */}
                  <img className="rounded-circle" src="assets/images/post/4by3/01.jpg" alt="" />
                  {/* Chat START */}
                  <div className="position-absolute top-50 start-0 translate-middle d-none d-lg-block">
                    {/* Chat item */}
                    <div className="bg-mode border p-3 rounded-3 rounded-start-top-0 d-flex align-items-center mb-3">
                      {/* Avatar */}
                      <div className="avatar avatar-xs me-3">
                        <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt="" /> </a>
                      </div>
                      {/* Comment box  */}
                      <div className="d-flex">
                        <h6 className="mb-0 ">Happy birthday </h6>
                        <span className="ms-2">🎂</span>
                      </div>
                    </div>

                    {/* Chat item */}
                    <div className="bg-mode border p-3 rounded-3 rounded-start-top-0 d-flex align-items-center mb-3">
                      {/* Avatar */}
                      <div className="avatar avatar-xs me-3">
                        <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="" /> </a>
                      </div>
                    {/* Comment box  */}
                      <div className="d-flex">
                        <h6 className="mb-0 ">New connection request </h6>
                        <span className="ms-2">🤘</span>
                      </div>
                    </div>

                    {/* Chat item */}
                    <div className="bg-mode border p-3 rounded-3 rounded-start-top-0 d-flex align-items-center mb-3">
                      {/* Avatar */}
                      <div className="avatar avatar-xs me-3">
                        <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="" /> </a>
                      </div>
                      {/* Comment box  */}
                        <div className="d-flex">
                          <h6 className="mb-0 ">Congratulations </h6>
                          <span className="ms-2">🎂</span>
                        </div>
                      </div>
                  </div>
                  {/* Chat END */}
                </div>
                <div className="col-md-6">
                  <div className="ms-4">
                    {/* Info */}
                    <h2 className="h1">Get Discovered</h2>
                    <p className="lead mb-4">Enjoy special interactive features such as Live Battles, Interactive Gifts, Happy Moments & Exclusive Posts to help you rise the ranks and grow your audience!</p>
                    <a className="btn btn-primary" href="#"> Let's start </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Get Discovered START */}

      {/* Video call START */}
      <section className="py-4 py-sm-5 position-relative">
        {/* Svg decoration START */}
        <div className="position-absolute top-0 start-0 mt-n5 pt-n5">
          <img className="h-300px blur-9" src="assets/images/elements/06.svg" alt="" />
        </div>
        {/* Svg decoration END */}
        
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row g-4 align-items-center position-relative z-index-1">
                <div className="col-md-6">
                  <div className="me-4">
                    {/* TItle */}
                    <h2 className="h1 mb-4">Video call</h2>
                    
                    {/* Meet creators */}
                    <div className="mb-3 d-flex align-items-start">
                      <img className="h-40px" src="assets/images/elements/04.svg" alt="" />
                      <div className="ms-4">
                        <h5 className="mt-2">Meet creators</h5>
                        <p className="mb-0">In no impression assistance contrasted Manners she wishing justice hastily.</p>
                      </div>
                    </div>
                    
                    {/* Support artists   */}
                    <div className="mb-3 d-flex align-items-start">
                      <img className="h-40px" src="assets/images/elements/10.svg" alt="" />
                      <div className="ms-4">
                        <h5 className="mt-2">Support artists</h5>
                        <p className="mb-0">Handsome met debating sir dwelling age material. As style lived he worse dried. </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 position-relative">
                  {/* Image */}
                  <img className="rounded-circle" src="assets/images/post/4by3/02.jpg" alt="" />

                  <div className="position-absolute top-50 start-100 translate-middle d-none d-lg-block">
                    {/* Video screen */}
                    {/* Video action */}
                    <div className="position-absolute top-0 end-0 m-3 z-index-1">
                      <div className="avatar avatar-lg">
                        <a href="#!"><img className="avatar-img rounded border border-white border-1" src="assets/images/post/1by1/07.jpg" alt="" /></a>
                      </div>
                    </div>

                    {/* Video action */}
                    <div className="position-absolute bottom-0 start-50 translate-middle-x z-index-1">
                      <button className="btn btn-white icon-md rounded-circle mb-3"> <i className="bi bi-mic-mute"></i></button>
                      <button className="btn btn-danger icon-md rounded-circle mb-3"> <i className="bi bi-x-lg"></i></button>
                    </div>

                    {/* HTML video START */}
                    <div className="player-wrapper plyr__controls-none rounded-3">
                      <video className="player-html" crossOrigin="anonymous" autoPlay loop muted controls>
                        <source src="assets/images/videos/video-call.mp4" type="video/mp4" />
                      </video>
                    </div>
                    {/* HTML video END */}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video call START */}

      {/* Action box START */}
      <section className="py-4 py-sm-5">
        <div className="container">
          <div className="card card-body bg-light shadow-none border-0 p-4 p-sm-5 text-center">
              <div className="col-lg-8 mx-auto">
                {/* Title */}
                <h2 className="h1">People prefer to message</h2>
                <p className="lead mb-4">Frequently sufficient to be unaffected. The furnished she concluded depending procuring concealed. </p>
                <div className="d-flex justify-content-center">
                  <a href="app-download.html"><img className="h-40px" src="assets/images/app-store.svg" alt="app-store" /></a>
                  <a href="app-download.html"><img className="h-40px ms-1 ms-sm-2" src="assets/images/google-play.svg" alt="google-play" /></a>
                </div>
                {/* Box List */}
                <ul className="nav nav-divider justify-content-center mt-4">
                  <li className="nav-item"> Easy set-up </li>
                  <li className="nav-item"> Free Forever </li>
                  <li className="nav-item"> Secure </li>
                </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Action box END */}

      {/* Main content END */}
    </main>
  )
}

export default IndexPage
