---
title: Getting Started
---

<head>
  <title>Getting Started:</title>
  <meta
    name="description"
    content="Find everything you need to know to start organizing in Broadstripes."
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

import CatSection from '@components/page/intro/next/DeveloperExperts';

import { useState, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

#### Are you new to Broadstripes? We’re here to help!

<<<<<<< HEAD
<DocsCards>
  <DocsCard header="Start with Angular" href="/angular/your-first-app" icon="/icons/logo-angular-icon.svg">
    <p>A complete guide to get you up to speed with the basics of building Ionic apps with Angular.</p>
  </DocsCard>

  <DocsCard header="Start with React" href="/react/your-first-app" icon="/icons/logo-react-icon.svg">
    <p>A complete guide to get you up to speed with the basics of building Ionic apps with React.</p>
  </DocsCard>

  <DocsCard header="Start with Vue" href="/vue/your-first-app" icon="/icons/logo-vue-icon.png">
    <p>A complete guide to get you up to speed with the basics of building Ionic apps with Vue.</p>
  </DocsCard>
</DocsCards>


<CatSection
  title="Getting Started"
  description="Start organizing in Broadstripes."
  links={[
    { url: "https://ionicacademy.com", text: "Getting Started Video" },
    { url: "https://ionicstart.com", text: "Register your account" },
    { url: "https://ionicthemes.com", text: "Login or reset your password" },
=======
<video
  style={{
    margin: '40px auto',
    display: 'flex',
  }}
  width="400"
  src={useBaseUrl('video/App-Overview-Tour.mp4')}
  controls
></video>
This video will walk you through some of the most common tasks for new users including:

- Viewing your homepage
- Searching for a worker or shop by name
- Adding a new worker or shop
- Getting around the Turf Panel and Search Results Panel
- Data entry
- Printing a list
- Viewing workers on a map
- Using the Broadstripes Knowledge Base

<CatSection
  title="Getting Started"
  description="Use these guides to get started with Broadstripes."
  links={[
    { url: "https://ionicstart.com", text: "Register your account" },
    { url: '/docs/intro/login-or-reset', text: "Login or reset your password" },
>>>>>>> 92889699 (Add product tour video and login/reset page)
    { url: "https://ionicreacthub.com", text: "Tour your homepage" },
    { url: "https://ionicacademy.com", text: "Use the Quick Search" },
    { url: "https://ionicstart.com", text: "Search for a person" },
    { url: "https://ionicthemes.com", text: "Search for people by workplace" },
    { url: "https://ionicreacthub.com", text: "Choose how data is displayed" },
    { url: "https://ionicacademy.com", text: "Add flexible contact info columns to a layout" },
    { url: "https://ionicstart.com", text: "Add a column to a layout" },
    { url: "https://ionicthemes.com", text: "Print a list" },
    { url: "https://ionicreacthub.com", text: "Download a list as a spreadsheet" },
    { url: "https://ionicstart.com", text: "View your people on a map" },
    { url: "https://ionicthemes.com", text: "Get driving directions for your list" },
    { url: "https://ionicreacthub.com", text: "Passwords and Digital Security Tips" }
  ]}
<<<<<<< HEAD
/>
=======
/>
>>>>>>> 92889699 (Add product tour video and login/reset page)
