import React from 'react'
import styled from "styled-components";
export default function Locations() {
  return (
    <div>

    <h2 style={{color: 'black', fontSize: '32px;', textAlign:'center'}}>Locations</h2>
<LocationsWrapper>
<div>Leicester</div>
<div>Loughborough</div>
<div>Hinckley</div>
<div>Melton Mowbray</div>
<div>Coalville</div>
<div>Market Harborough</div>
<div>Ashby-de-la-Zouch</div>
<div>Lutterworth</div>
<div>Oadby</div>
<div>Wigston</div>
<div>Shepshed</div>
<div>Blaby</div>
<div>Broughton Astley</div>
<div>Barwell</div>
<div>Earl Shilton</div>
<div>Syston</div>
<div>Mountsorrel</div>
<div>Groby</div>
<div>Anstey</div>
<div>Kirby Muxloe</div>




    </LocationsWrapper>
    </div>
  )
}


const LocationsWrapper = styled.div`

display:grid;
grid-template-columns: repeat(4, 1fr);
align-items:center;
padding: 1.25rem;
height:auto;
font-size: 21px;
font-weight:bold;
color:white;
background-color:#0B093B;

@media (max-width: 768px) {
  
    grid-template-columns: repeat(2, 1fr); /* 2 columns on mobile */

}

`