import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const myObj = {
    username: "Sarang",
    age:24
  }

  const myArr = ["₹47,199","₹1,549","₹2,250"]

  return (
    <>
      {/* 
      Steps to install tailwind

      npm install -D tailwindcss postcss autoprefixer
      npx tailwindcss init -p 
      
      Add the paths to all of your template files in your tailwind.config.js file.
      (content: [
      "./index.html",
      "./src/**'/'*.{js,ts,jsx,tsx}",],
      
      Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      run the project

      */}

      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

      <Card channel="Nike Air Force 1 07 LV8" brand="Nike Air Force 1 07 LV8" someObject={myObj}/>
      <Card channel="Sarang" brand="My new Shoe" btnText="Visit Me"/>

      {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
        src="https://images.pexels.com/photos/20894817/pexels-photo-20894817/free-photo-of-hiker-admiring-mount-zugspitze-from-the-shore-of-lake-eibsee-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
        alt="" width="384" height="512" />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400">
                Sarah Dayan
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
      </figure> */}

    </>
  )
}

export default App
