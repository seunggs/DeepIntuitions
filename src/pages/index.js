import React from 'react'
import Layout from '../components/layout'
import Headline from '../components/Headline'
import SubHeadline from '../components/SubHeadline'
import Button from '../components/Button'
import TextAccent from '../components/TextAccent'
import MyVideo from '../components/MyVideo'
import nn from '../images/deep-neural-network.jpg'
import loss_surface from '../images/loss-surface.jpg'
import { CHECKOUT_URL } from '../utils/constants'
import scrollTo from 'gatsby-plugin-smoothscroll'

const Box = ({ order, heading, content }) => {
  const orderClassNameMap = ['md:col-start-2', '', '']
  const orderClassName = orderClassNameMap[order]
  const orderBgColorMap = ['bg-sky-blue', 'bg-blue', 'bg-purple']
  const orderBgColor = orderBgColorMap[order]

  return (
    <div className={`${orderClassName} col-span-1 md:col-span-3 justify-center`}>
      <div className={`shadow-md text-white p-5 ${orderBgColor}`} style={{ borderRadius: '10px' }}>
        <div className="mb-2 uppercase text-sm font-semibold text-white text-opacity-75">
          {heading}
        </div>
        <div className="source-serif-pro text-base">
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

const SectionHeadline = ({ index, children }) => {
  return (
    <div className="mb-5">
      <SubHeadline className="mb-2 aqua">Section {index}</SubHeadline>
      <Headline size="sm" className="">{children}</Headline>
    </div>
  )
}

const List = ({ children }) => <ul className="text-white text-opacity-75 content list-disc pl-5">{children}</ul>

const ListItem = ({ children }) => <li className="mb-2">{children}</li>

const MyImage = ({ src }) => (
  <div className="w-full overflow-hidden shadow-md" style={{ borderRadius: '8px' }}>
    <img src={src} style={{ width: '100%' }} />
  </div>
)

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-12 mt-12 md:mt-24 items-center">

        {/* hero */}
        <div className="col-span-6 md:pr-20 justify-center">
          <SubHeadline>For coders new to Deep Learning</SubHeadline>
          <Headline>Get An Intuitive Understanding of Deep Learning</Headline>
          <div className="content">
            <p className="mb-5">If you've been struggling to get an intuitive feel for Deep Neural Networks because of all the technical details, this course is for you.</p>
            <p className="mb-6">Slow down at the beginning to get the big picture - it's the fastest path to the state of the art in Deep Learning.</p>
          </div>

          <Button onClick={() => scrollTo('#enroll')}>Enroll now</Button>
        </div>

        <div className="col-span-6 justify-center pt-12 md:pt-0">
          <div className="w-full rounded-md overflow-hidden">
            <MyVideo url='https://youtu.be/9LM4yA5YBwQ' />
          </div>
        </div>
        {/* end: hero */}

      </div>

      {/* section */}
      <div className="grid grid-cols-1 md:grid-cols-11 mt-12 md:mt-24 items-center gap-6">

        <Box
          order={0}
          heading="Time commitment"
          content={<ul className="pl-5 list-disc">
            <li className="mb-2">3 months</li>
            <li>~5-10 hrs/wk</li>
          </ul>}
        />
        <Box
          order={1}
          heading="Focus"
          content={<ul className="pl-5 list-disc">
            <li className="mb-2">Intuition & foundation</li>
            <li className="mb-2">Math for deep learning</li>
            <li>PyTorch + PyTorch Lightening</li>
          </ul>}
        />
        <Box
          order={2}
          heading="Prerequisites"
          content={<ul className="pl-5 list-disc">
            <li className="mb-2">Few months of coding experience</li>
            <li>High school math</li>
          </ul>}
        />

      </div>
      {/* end: section */}

      <div className="grid grid-cols-1 md:grid-cols-12 mt-12 md:mt-24 items-center">

        <div className="col-span-5 justify-center pb-12 md:pb-0">
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

        <div className="col-span-2 justify-center hidden md:block">
          <div className="flex justify-center">
            <div style={{ borderRight: '2px solid rgba(63,62,135,0.15)', transform: 'rotate(10deg)', width: '10px', height: '320px' }} />
          </div>
        </div>

        <div className="col-span-5 justify-center">
          <SubHeadline>Prerequisites</SubHeadline>
          <Headline size="md">What do you need before the course?</Headline>

          <div className="content">
            <div className="flex flex-row items-center mb-5">
              <Number className="grass">1.</Number>
              <p>High school mathematics (but we will re-learn the important concepts in the course)</p>
            </div>
            <div className="flex flex-row items-center">
              <Number className="green">2.</Number>
              <p>Few months of coding experience - you don’t need to know Python, but you should be willing to learn some Python outside of this course</p>
            </div>
          </div>

        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-12 mt-12 md:mt-24 items-center">

        <div className="col-span-1 md:col-span-7 justify-center hidden md:block">
          <div className="md:pr-16">
            <MyImage src={nn} />
          </div>
        </div>

        <div className="col-span-1 md:col-span-5 justify-center">
          <div className="">
            <SubHeadline>What you'll learn</SubHeadline>
            <Headline size="md">What will you know after taking this course?</Headline>

            <div className="w-full md:hidden my-8">
              <MyImage src={nn} />
            </div>

            <div className="content">
              <div className="flex flex-row items-center mb-5">
                <Number className="magenta">1.</Number>
                <p>You will have an intuitive understanding of Deep Learning and its underlying mechanics</p>
              </div>
              <div className="flex flex-row items-center mb-5">
                <Number className="hot-pink">2.</Number>
                <p>You’ll be well equipped to start exploring the cutting edge of AI and all the variations of Deep Learning like Convolutional Neural Nets for Computer Vision or Transformer for Natural Language Processing</p>
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

      <div className="grid grid-cols-1 md:grid-cols-12 mt-12 md:mt-24 items-center">

        <div className="col-span-1 md:col-span-5 justify-center">
          <div className="">
            <SubHeadline>Course components</SubHeadline>
            <Headline size="md">What's included in the course?</Headline>

            <div className="w-full md:hidden my-8">
              <MyImage src={loss_surface} />
            </div>

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
                <p>Build neural networks from scratch using PyTorch and PyTorch Lightening</p>
              </div>
              <div className="flex flex-row items-center mb-5">
                <Number className="yellow">6.</Number>
                <p>Email access to me for questions (based on my availability)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-7 justify-center hidden md:block">
          <div className="md:pl-16">
            <MyImage src={loss_surface} />
          </div>
        </div>
        {/* end: section */}

      </div>

      {/* syllabus */}
      <div className="grid grid-cols-1 md:grid-cols-12 mt-12 md:mt-24 items-start">

        <div className="col-span-4 justify-center">
          <div className="mb-8 md:pr-16">
            <SubHeadline>Course overview</SubHeadline>
            <Headline size="md">Syllabus</Headline>
          </div>
        </div>

        <div className="col-span-8 justify-center">
          <div className="w-full overflow-hidden shadow-md p-10 text-white bg-midnight" style={{ borderRadius: '8px' }}>

            <div className="mb-10">
              <SectionHeadline index={0}>Deep learning - the big picture</SectionHeadline>
              <List>
                <ListItem>What is machine learning exactly?</ListItem>
                <ListItem>Different types of machine learning: supervised, unsupervised, and reinforcement learning</ListItem>
                <ListItem>Deep neural network as features and weights</ListItem>
                <ListItem>Loss functions</ListItem>
                <ListItem>Training vs inference</ListItem>
                <ListItem>Why deep learning is unintuitive and how to make it feel intuitive</ListItem>
              </List>
            </div>

            <div className="mb-10">
              <SectionHeadline index={1}>Reinventing the deep neural network from scratch</SectionHeadline>
              <List>
                <ListItem>Perceptrons</ListItem>
                <ListItem>Why it's called "deep" learning and why it matters</ListItem>
                <ListItem>Activation functions</ListItem>
                <ListItem>Cost of deep neural network's flexibility - the overfitting problem</ListItem>
                <ListItem>Mystery of Deep Learning - "overparameterization"</ListItem>
                <ListItem>Deep neural network as a Universal Function Approximator</ListItem>
                <ListItem>Linear Algebra detour</ListItem>
                <ListItem>The forward pass</ListItem>
                <ListItem>Importance of scalability in deep learning models</ListItem>
                <ListItem>Emergent properties of complex systems and why deep neural network is a black box</ListItem>
              </List>
            </div>

            <div className="mb-10">
              <SectionHeadline index={2}>How the model learns on its own - Back Propagation algorithm deep-dive</SectionHeadline>
              <List>
                <ListItem>The naive method</ListItem>
                <ListItem>The big picture - back propagation vs the naive method</ListItem>
                <ListItem>Calculus detour - intuitive understanding of the core math behind back propagation</ListItem>
                <ListItem>Gradient descent</ListItem>
                <ListItem>Function composition and the chain rule</ListItem>
                <ListItem>Computational graphs in depth</ListItem>
                <ListItem>Back propagation under the hood</ListItem>
              </List>
            </div>

            <div className="mb-10">
              <SectionHeadline index={3}>How to make neural networks work in reality - intuition behind neural network optimizations</SectionHeadline>
              <List>
                <ListItem>The Vanishing Gradient problem</ListItem>
                <ListItem>Variations of gradient descent - Stochastic Gradient Descent and Mini-batch Gradient Descent</ListItem>
                <ListItem>Gradient descent optimizers - Momentum, RMSProp, and Adam Optimizer</ListItem>
                <ListItem>Learning rate decay, input normalization and batch norm</ListItem>
                <ListItem>One of the most fundamental problems in Deep Learning: overfitting problem - the big picture</ListItem>
                <ListItem>Solutions for overfitting - early stopping, regularization, and drop out</ListItem>
                <ListItem>Neural networks with multiple outputs - softmax and cross entropy loss</ListItem>
                <ListItem>All about data - importance of what goes into neural networks</ListItem>
              </List>
            </div>

            <div className="">
              <SectionHeadline index={4}>Coding deep neural networks in PyTorch and PyTorch Lightening</SectionHeadline>
              <List>
                <ListItem>The basics - arrays, tensors, etc.</ListItem>
                <ListItem>Build a simple neural network from scratch - math to code</ListItem>
                <ListItem>Build the same neural network using PyTorch's nn module</ListItem>
                <ListItem>Build a deep neural network to solve hand-written digit recognition problem using PyTorch</ListItem>
              </List>
            </div>

          </div>
        </div>

      </div>
      {/* end: syllabus */}

      {/* enroll */}
      <div id="enroll" className="grid grid-cols-1 md:grid-cols-12 mt-12 md:mt-24 items-start">

        <div className="col-span-1 md:col-span-6 justify-center">
          <div className="mb-16 md:pr-16">
            <Headline size="md"><span className="mr-4 block md:inline-block">🎉</span>Ready to get started?</Headline>

            <div className="text-xl text-gray-500 leading-normal">
              <div className="mb-2">Get 4 months access for <span className="font-semibold">2 monthly payments of $197</span>.</div>
              <div className="mb-6">Start learning today.</div>
            </div>

            <Button href={CHECKOUT_URL}>Enroll now</Button>
          </div>
        </div>

        <div className="col-span-1 md:col-span-3 justify-center mb-12 md:mb-0">
          <TextAccent><Headline size="sm">Learn</Headline></TextAccent>
          <div className="source-serif-pro text-gray-500 pl-5 pr-8" style={{ fontSize: '1.08rem' }}>Get an intuitive understanding of Deep Learning and its underlying mechanics. Learn to build a basic neural network with PyTorch.</div>
        </div>

        <div className="col-span-1 md:col-span-3 justify-center">
          <TextAccent><Headline size="sm">Time commitment</Headline></TextAccent>
          <div className="source-serif-pro text-gray-500 pl-5 pr-8" style={{ fontSize: '1.08rem' }}>On average, students spend ~5-10 hours/week for 3 months to complete this course.</div>
        </div>

      </div>
      {/* end: enroll */}

    </Layout >
  )
}