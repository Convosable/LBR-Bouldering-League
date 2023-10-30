import React from 'react'

const Home = () => {
  return (
    <div className='home'>
        <h1>Welcome to Long Beach Rising Bouldering Leage!</h1>

          <p>Remember, the main goals of boudlering league are to:</p>  
            <li>Try your hardest and become a better and strong climber.</li>
            <li>Get to know other members in our community and climb with and create new friends</li>
            <li>NOT GET INJURED... please warm up accordingly and remember no climb is worth an injury. Listen to your body and rest when needed!</li>
  
        <h2>Points System</h2>
          <p>Points are calculated based on an individuals pre-set handicap.  The scoring systems works like so:</p>
            <li>You are awarded 100 points for each climb completed at your pre-set handicap as well as 1 grade below your handicap.</li>
            <li>You are awarded extra points for each climb completed above you hanidcap level: 150 points for 1 grade abover and 200 points for 2 grades above.</li>
            <li>You are awarded 0 points for each climb completed 1 grade below your handicap level.</li>
          <p>Disclaimers</p>
            <li>Points are only awarded for 2 grades above your handicap because if you are sending 3 grades above your handicap, you probably need to bump up your hanidcap.</li>
            <li>Points are only awarded for 1 grade below you hanidcap because it is assumed that you should be able to complete a problem 2 grades below your handicap fairly easily.</li>
            <li>This scoring system allows the available points to be earned equal at every handicap level. </li>
          <p>Example</p>
            <p>Chris Shawarma - Handicap: V5</p>
            <p>If Chris sends every climb V0 - V9 on a climbing set, points will be awarded as follows:</p>
            <li>V0-V3: 0 points</li>
            <li>V4-V5: 100 points</li>
            <li>V6: 150 points</li>
            <li>V7: 200 points</li>
            <li>V8-V9: 0 points... Chris needs to move up his handicapo level</li>

        <h2>Rules</h2>
          <li>Every climber has one week to complete and submit their climbs to recieve full points.</li>
          <li>Points will still be awarded if climbs are completed late, but at a lesser value: 80% for a week after, 60% for 2 weeks after.</li>
          <li>Each week of boudlering league will begin on the Tuesday and endf the following Tuesday. This gives every climber 8 days to complete and submit their climbs.  </li>
          <li>If you are sick, or traveling for an extended period of time, just let us know and we can figure something out for you.</li>
        <h2>Prizes</h2>
          <li>insert prizes here </li>
    </div>
  )
}

export default Home

// add to ponits system (submitting climbs late = 80 percent one week l;ate and 60 2 weeks and so on)