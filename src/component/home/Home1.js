import React from 'react'

function Home1() {
    return (
        <div>
<body class="onepage" data-spy="scroll" data-target=".navbar">
<div class="content-wrapper">
  <nav class="navbar transparent absolute nav-wrapper-dark inverse-text navbar-expand-lg text-uppercase">
    <div class="container">
      <div class="navbar-header">
        <div class="navbar-brand"><a href="index.html"><img src="#" srcset="style/images/logo-light.png 1x, style/images/logo-light@2x.png 2x" alt="" /></a></div>
        <div class="navbar-hamburger ml-auto d-lg-none d-xl-none"><button class="hamburger animate" data-toggle="collapse" data-target=".navbar-collapse"><span></span></button></div> 
      </div>
     
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item"><a class="nav-link scroll" href="#home">Home</a></li>
          <li class="nav-item"><a class="nav-link scroll" href="#about">About</a></li>
          <li class="nav-item dropdown"><a class="nav-link scroll dropdown-toggle" href="#portfolio">Portfolio</a>
            <ul class="dropdown-menu dropdown-menu-left">
              <li class="nav-item"><a class="dropdown-item scroll" href="#portfolio">Portrait Portfolio</a></li>
              <li class="nav-item"><a class="dropdown-item scroll" href="#portfolio2">Advertorial Portfolio</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link scroll" href="#services">Services</a></li>
          <li class="nav-item"><a class="nav-link scroll" href="#contact">Contact</a></li>
        </ul>
     
      </div>
   
    </div>

  </nav>
 \
  
  <section id="about">
    <div class="wrapper dark-wrapper inverse-text">
      <div class="container inner">
        <h2 class="section-title section-title-upper text-center">A Little About Me</h2>
        <div class="space20"></div>
        <div class="row">
          <div class="col-lg-5 text-md-center">
            <figure><img src="" alt="" /></figure>
          </div>
         
          <div class="space30 d-lg-none d-xl-none"></div>
          <div class="col-lg-7">
            <p class="lead larger">Hello! I'm Julia Brailie, a people & portrait photographer. I am very passionate about photography and it becomes quite obvious in the way I create portraits.</p>
            <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus.</p>
            <ul class="social social-mute social-s">
              <li><a href="#"><i class="fa fa-flickr"></i></a></li>
              <li><a href="#"><i class="fa fa-instagram"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-500px"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
            </ul>
          </div>
      
        </div>
      
      </div>
     
    </div>
   
    <div class="wrapper image-wrapper bg-image inverse-text" data-image-src="style/images/art/bg20.jpg">
      <div class="container inner pt-150 pb-150">
        <h2 class="heading text-center">I take photographs with<br class="d-none d-md-block" />
          creativity, concept & passion</h2>
      </div>
    
    </div>
    
  </section>

  <section id="portfolio">
    <div class="wrapper dark-wrapper inverse-text">
      <div class="container inner">
        <h2 class="section-title section-title-upper text-center">Selected Works</h2>
        <div class="space20"></div>
        <div id="cube-grid-large-filter" class="cbp-filter-container text-center">
          <div data-filter="*" class="cbp-filter-item-active cbp-filter-item">All</div>
          <div data-filter=".cat1" class="cbp-filter-item">Category 1</div>
          <div data-filter=".cat2" class="cbp-filter-item">Category 2</div>
          <div data-filter=".cat3" class="cbp-filter-item">Category 3</div>
          <div data-filter=".cat4" class="cbp-filter-item">Category 4</div>
          <div data-filter=".cat5" class="cbp-filter-item">Category 5</div>
        </div>
        <div class="clearfix"></div>
        <div class="space20"></div>
        <div id="cube-grid-large" class="cbp light-gallery">
          <div class="cbp-item cat1 cat5">
            <figure class="overlay overlay2"><a href="style/images/art/p16-full.jpg" data-sub-html="#caption1"><img src="style/images/art/p16.jpg" alt="" />
              <div id="caption1" class="d-none">
                <p>Cras mattis consectetur purus sit amet fermentum.</p>
              </div>
              </a></figure>
          </div>
          
          <div class="cbp-item cat2">
            <figure class="overlay overlay2"><a href="style/images/art/p17-full.jpg"><img src="style/images/art/p17.jpg" alt="" /></a></figure>
          </div>
        
          <div class="cbp-item cat2 cat3">
            <figure class="overlay overlay2"><a href="style/images/art/p18-full.jpg" data-sub-html="#caption2"><img src="style/images/art/p18.jpg" alt="" />
              <div id="caption2" class="d-none">
                <p>Nulla vitae elit libero, a pharetra augue.</p>
              </div>
              </a></figure>
          </div>
          
          <div class="cbp-item cat1 cat5">
            <figure class="overlay overlay2"><a href="style/images/art/p19-full.jpg"><img src="style/images/art/p19.jpg" alt="" /></a></figure>
          </div>
          
          <div class="cbp-item cat5 cat4">
            <figure class="overlay overlay2"><a href="style/images/art/p20-full.jpg"><img src="style/images/art/p20.jpg" alt="" /></a></figure>
          </div>
          
          <div class="cbp-item cat2 cat3">
            <figure class="overlay overlay2"><a href="style/images/art/p21-full.jpg"><img src="style/images/art/p21.jpg" alt="" /></a></figure>
          </div>
          
          <div class="cbp-item cat5">
            <figure class="overlay overlay2"><a href="style/images/art/p22-full.jpg"><img src="style/images/art/p22.jpg" alt="" /></a></figure>
          </div>
          
          <div class="cbp-item cat1 cat5">
            <figure class="overlay overlay2"><a href="style/images/art/p23-full.jpg"><img src="style/images/art/p23.jpg" alt="" /></a></figure>
          </div>
          
          <div class="cbp-item cat2 cat4">
            <figure class="overlay overlay2"><a href="style/images/art/p24-full.jpg"><img src="style/images/art/p24.jpg" alt="" /></a></figure>
          </div>
          
          <div class="cbp-item cat1 cat2">
            <figure class="overlay overlay2"><a href="style/images/art/p25-full.jpg"><img src="style/images/art/p25.jpg" alt="" /></a></figure>
          </div>
          
          <div class="cbp-item cat5 cat3">
            <figure class="overlay overlay2"><a href="style/images/art/p26-full.jpg"><img src="style/images/art/p26.jpg" alt="" /></a></figure>
          </div>
          
          <div class="cbp-item cat5 cat2">
            <figure class="overlay overlay2"><a href="style/images/art/p27-full.jpg"><img src="style/images/art/p27.jpg" alt="" /></a></figure>
          </div>
           
        </div>
        
      </div>
     
    </div>
    
  </section>

  <section id="portfolio2">
    <div class="wrapper dark-wrapper inverse-text">
      <div class="container inner">
        <h2 class="section-title section-title-upper text-center">Advertorial Shots</h2>
        <div class="space20"></div>
        <div class="swiper-container-wrapper image-grid swiper-col3-20" data-aos="fade">
          <div class="swiper-container text-center">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="style/images/art/po1.jpg" alt="" /></div>
              <div class="swiper-slide"><img src="style/images/art/po3.jpg" alt="" /></div>
              <div class="swiper-slide"><img src="style/images/art/po5.jpg" alt="" /></div>
              <div class="swiper-slide"><img src="style/images/art/po6.jpg" alt="" /></div>
              <div class="swiper-slide"><img src="style/images/art/po7.jpg" alt="" /></div>
              <div class="swiper-slide"><img src="style/images/art/po8.jpg" alt="" /></div>
              <div class="swiper-slide"><img src="style/images/art/po9.jpg" alt="" /></div>
              <div class="swiper-slide"><img src="style/images/art/po10.jpg" alt="" /></div>
              <div class="swiper-slide"><img src="style/images/art/po11.jpg" alt="" /></div>
            </div>
           
          </div>
        
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
       
      </div>
     
    </div>
   
    <div class="wrapper image-wrapper bg-image inverse-text" data-image-src="style/images/art/bg21.jpg">
      <div class="container inner pt-120 pb-120">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="swiper-container-wrapper basic-slider">
              <div class="swiper-container text-center">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <blockquote class="icon icon-top larger">
                      <p>Consectetur adipiscing elit. Duis mollis, est non commodo luctus gestas eget quam integer. Curabitur blandit tempus rutrum faucibus.</p>
                      <footer class="blockquote-footer">Connor Gibson</footer>
                    </blockquote>
                  </div>
                 
                  <div class="swiper-slide">
                    <blockquote class="icon icon-top larger">
                      <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio.</p>
                      <footer class="blockquote-footer">Coriss Ambady</footer>
                    </blockquote>
                  </div>
                 
                  <div class="swiper-slide">
                    <blockquote class="icon icon-top larger">
                      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis.</p>
                      <footer class="blockquote-footer">Barclay Widerski</footer>
                    </blockquote>
                  </div>
                  
                </div>
              
              </div>
         
              <div class="swiper-pagination gap-small"></div>
            </div>
           
          </div>
      
        </div>
       
      </div>
  
    </div>

  </section>
  
  <section id="services">
    <div class="wrapper dark-wrapper inverse-text">
      <div class="container inner">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <h2 class="section-title section-title-upper text-center">My Services</h2>
            <p class="text-center">Nullam quis risus eget urna mollis ornare vel eu leo. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat pellentesque ornare sem lacinia quam.</p>
            <div class="space40"></div>
            <div class="row d-flex align-items-center">
              <div class="col-md-6 order-md-2 text-center">
                <figure><img class="octagon" src="style/images/art/sh3.jpg" alt="" /></figure>
              </div>
           
              <div class="space20 d-block d-sm-none"></div>
              <div class="col-md-6">
                <h3>People & Portrait Photography</h3>
                <p class="lead mb-0">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra. Integer posuere erat.</p>
              </div>
            
            </div>
        
            <div class="space20 d-none d-md-block"></div>
			<div class="space50 d-md-none"></div>
            <div class="row d-flex align-items-center">
              <div class="col-md-6 text-center">
                <figure><img class="octagon" src="style/images/art/sh4.jpg" alt="" /></figure>
              </div>
           
              <div class="space20 d-block d-sm-none"></div>
              <div class="col-md-6">
                <h3>Advertorial Photography</h3>
                <p class="lead mb-0"> Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus.</p>
              </div>
            
            </div>
           
            <div class="space20 d-none d-md-block"></div>
			<div class="space50 d-md-none"></div>
            <div class="row d-flex align-items-center">
              <div class="col-md-6 order-md-2 text-center">
                <figure><img class="octagon" src="style/images/art/sh5.jpg" alt="" /></figure>
              </div>
           
              <div class="space20 d-block d-sm-none"></div>
              <div class="col-md-6">
                <h3>Family Photography</h3>
                <p class="lead mb-0">Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus ac facilisis in, egestas eget quam.</p>
              </div>
            
            </div>
         
          </div>
          
        </div>
       
      </div>
   
    </div>
    
  </section>
  
  
 
  <footer class="dark-wrapper inverse-text">
    <div class="sub-footer">
      <div class="container inner text-center"> <img src="#" srcset="style/images/logo-light.png 1x, style/images/logo-light@2x.png 2x" alt="" />
        <div class="space25"></div>
        <p>© 2018 Brailie. All rights reserved. Theme by elemis.</p>
        <div class="space30"></div>
        <ul class="social social-bg social-s">
          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
          <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
          <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
          <li><a href="#"><i class="fa fa-vimeo"></i></a></li>
          <li><a href="#"><i class="fa fa-instagram"></i></a></li>
        </ul>
      </div>
   
    </div>

  </footer>
</div>

</body>


        </div>
    )
}

export default Home1
