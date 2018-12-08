import React from 'react';

function HomeMyActivity() {

  const tempProps = {
    watchingNow: [
      'Ozark', 'Game of Thrones', 'Daredevil'
    ],
    watchingLater: [
      'Schitt\'s Creek', 'Modern Family',
    ]
  }

  return(
    <div>
      <h1>My Activity</h1>
      <ShowList shows={tempProps.watchingNow} />
      <ShowList shows={tempProps.watchingLater} />
    </div>
  );
}

export default HomeMyActivity;