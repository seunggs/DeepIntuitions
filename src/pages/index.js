import React from 'react'
import ReactPlayer from 'react-player'
import Layout from '../components/layout'
import Headline from '../components/Headline'
import SubHeadline from '../components/SubHeadline'
import nn from '../images/deep-neural-network.jpg'
import loss_surface from '../images/loss-surface.jpg'

const Box = ({ order, heading, content }) => {
  const orderClassNameMap = ['col-start-2', '', '']
  const orderClassName = orderClassNameMap[order]
  const orderBgColorMap = ['bg-sky-blue', 'bg-blue', 'bg-purple']
  const orderBgColor = orderBgColorMap[order]

  return (
    <div className={`${orderClassName} col-span-3 justify-center`}>
      <div className={`shadow-md text-white p-5 ${orderBgColor}`} style={{ borderRadius: '10px' }}>
        <div className="mb-2 uppercase text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.8)' }}>
          {heading}
        </div>
        <div className="source-serif-pro">
          {content}
        </div>
      </div>
    </div>
  )
}

const Number = ({ children, className = 'bg-grass' }) => {
  return (
    <div
      className={`flex flex-row justify-center items-center system-font font-semibold text-4xl flex-none mr-2 ${className}`}
      style={{ width: '56px' }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-12 mt-24 items-center">

        {/* hero */}
        <div className="col-span-6 md:pr-20 justify-center">
          <SubHeadline>For coders new to Deep Learning</SubHeadline>
          <Headline>Get An Intuitive Understanding of Deep Learning</Headline>
          <div className="content">
            <p className="mb-5">If you've been struggling to get an intuitive feel for Deep Neural Networks because of all the technical details, this course is for you.</p>
            <p className="mb-6">Slow down at the beginning to get the big picture - it's the fastest path to the state of the art in Deep Learning.</p>
          </div>
        </div>

        <div className="col-span-6 justify-center">
          <div style={{ maxWidth: '100%', width: '640px', height: '360px', borderRadius: '5px', overflow: 'hidden' }}>
            <ReactPlayer url='https://youtu.be/9LM4yA5YBwQ' />
          </div>
        </div>
        {/* end: hero */}

      </div>

      {/* section */}
      <div className="grid grid-cols-1 md:grid-cols-11 mt-24 items-center gap-6">

        <Box
          order={0}
          heading="Time commitment"
          content={<div>
            <div className="mb-1">3 months</div>
            <div>~5-10 hrs/wk</div>
          </div>}
        />
        <Box
          order={1}
          heading="Focus"
          content={<div>
            <div className="mb-1">Intuition & foundation</div>
            <div className="mb-1">Math for deep learning</div>
            <div>PyTorch</div>
          </div>}
        />
        <Box
          order={2}
          heading="Prerequisites"
          content={<div>
            <div className="mb-1">1 yr of coding experience</div>
            <div>High school math</div>
          </div>}
        />

      </div>
      {/* end: section */}

      <div className="grid grid-cols-1 md:grid-cols-12 mt-24 items-center">

        <div className="col-span-5 justify-center">
          <div className="">
            <SubHeadline>Target audience</SubHeadline>
            <Headline size="md">Who is this course for?</Headline>

            <div className="content">
              <div className="flex flex-row items-center mb-5">
                <Number className="grass">1.</Number>
                <p>People who are new to deep learning and find concepts confusing and unintuitive.</p>
              </div>
              <div className="flex flex-row items-center">
                <Number className="green">2.</Number>
                <p>People who’ve been exploring deep learning for some time, but don’t feel like it has really “clicked” yet.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 justify-center">
          <div className="flex justify-center">
            <div style={{ borderRight: '2px solid rgba(63,62,135,0.15)', transform: 'rotate(10deg)', width: '10px', height: '320px' }} />
          </div>
        </div>

        <div className="col-span-5 justify-center">
          <div className="">
            <SubHeadline>Prerequisites</SubHeadline>
            <Headline size="md">What do you need before the course?</Headline>

            <div className="content">
              <div className="flex flex-row items-center mb-5">
                <Number className="grass">1.</Number>
                <p>High school mathematics (but we will re-learn the important concepts in the course)</p>
              </div>
              <div className="flex flex-row items-center">
                <Number className="green">2.</Number>
                <p>At least 6 months of coding experience - you don’t need to know Python, but you should be willing to learn some Python outside of this course</p>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-12 mt-24 items-center">

        <div className="col-span-7 justify-center">
          <div className="md:pr-16">
            <div className="w-full overflow-hidden" style={{ borderRadius: '5px' }}>
              <img src={nn} style={{ width: '100%' }} />
            </div>
          </div>
        </div>

        <div className="col-span-5 justify-center">
          <div className="mb-16">
            <SubHeadline>What you'll learn</SubHeadline>
            <Headline size="md">What will you know after taking this course?</Headline>

            <div className="content">
              <div className="flex flex-row items-center mb-5">
                <Number className="magenta">1.</Number>
                <p>You will have an intuitive understanding about Deep Learning and its underlying mechanics</p>
              </div>
              <div className="flex flex-row items-center mb-5">
                <Number className="hot-pink">2.</Number>
                <p>You’ll be well equipped to start exploring the cutting edge of AI and all the variations of Deep Learning like Convolutional Neural Nets for Computer Vision or Transformers for Natural Language Processing</p>
              </div>
              <div className="flex flex-row items-center mb-5">
                <Number className="rose">3.</Number>
                <p>You will be able to understand what deep learning experts like Geoffrey Hinton and Ilya Sutskever are talking about in articles and interviews</p>
              </div>
              <div className="flex flex-row items-center">
                <Number className="tangerine">4.</Number>
                <p>You’ll be able to start experimenting with your own AI projects using PyTorch</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 mt-24 items-center">

        <div className="col-span-5 justify-center">
          <div className="mb-16">
            <SubHeadline>Course components</SubHeadline>
            <Headline size="md">What's included in the course?</Headline>

            <div className="content">
              <div className="flex flex-row items-center mb-5">
                <Number className="magenta">1.</Number>
                <p>Develop intuitive understanding of deep neural networks</p>
              </div>
              <div className="flex flex-row items-center mb-5">
                <Number className="hot-pink">2.</Number>
                <p>Visual and intuitive understanding of core math concepts behind Deep Learning</p>
              </div>
              <div className="flex flex-row items-center mb-5">
                <Number className="rose">3.</Number>
                <p>Detailed view of how exactly deep neural networks work beneath the hood</p>
              </div>
              <div className="flex flex-row items-center mb-5">
                <Number className="orange">4.</Number>
                <p>Computational graphs (which libraries like PyTorch and Tensorflow are built on)</p>
              </div>
              <div className="flex flex-row items-center mb-5">
                <Number className="tangerine">5.</Number>
                <p>Build neural networks from scratch using PyTorch</p>
              </div>
              <div className="flex flex-row items-center mb-5">
                <Number className="yellow">6.</Number>
                <p>Email access to me for questions (based on my availability)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-7 justify-center">
          <div className="md:pl-16">
            <div className="w-full overflow-hidden" style={{ borderRadius: '5px' }}>
              <img src={loss_surface} style={{ width: '100%' }} />
            </div>
          </div>
        </div>
        {/* end: section */}

      </div>


    </Layout >
  )
}