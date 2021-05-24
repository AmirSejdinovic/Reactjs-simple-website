import React from 'react';
import AboutSl from './about2.jpg';

function About(){
  return<div>
<h1 className="bg-dark text-white p-3">About</h1>
<div className="row">
  <div className="col-md-6">
    <img src={AboutSl} width="600"/>
  </div>
  <div className="col-md-6">
   <p>Morbi bibendum ligula vitae volutpat blandit. Cras ultricies arcu ultrices, maximus turpis sed, dictum lacus. Pellentesque sagittis, ante non pellentesque feugiat, ex sapien bibendum eros, vel molestie felis odio non elit. Nullam id urna facilisis, iaculis ligula at, rhoncus odio. Integer commodo finibus est, commodo molestie ex fringilla quis. Nam vitae lorem ut eros gravida porttitor. Nunc orci purus, faucibus in lacus et, rhoncus rhoncus quam. Proin eget ultrices ipsum. Praesent rutrum ex id orci ornare sodales. Nunc lectus erat, egestas non lobortis eu, efficitur non ex. Nulla auctor vitae metus sed porta. Donec lacinia purus a pellentesque luctus. Duis tempus urna eu ullamcorper dignissim. Cras maximus, sem eu euismod convallis, velit felis elementum sapien, eget ullamcorper magna diam id risus. Quisque a lorem feugiat, convallis sapien id, blandit lorem.</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique eros risus, ac mollis ex blandit ac. Sed laoreet lacus vitae risus accumsan, id fringilla metus ullamcorper. Nulla sollicitudin leo sit amet vestibulum egestas. Quisque commodo eu metus at dapibus. Donec aliquam id massa in gravida. Nulla egestas, neque ac imperdiet sagittis, est lectus vulputate purus, eget ornare est nulla nec risus. Etiam aliquet felis eu nulla semper, eget dictum ligula consequat. Curabitur suscipit metus a sollicitudin dictum. Aenean ut libero sed nisl rutrum euismod. Mauris eget ex sit amet dolor sagittis tincidunt et at odio.</p>
  </div>
</div>
  </div>
}

export default About;