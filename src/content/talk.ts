import misalignmentCover from '../assets/papers/coding-agent-misalignment.png'
import chatCover from '../assets/papers/programming-by-chat.png'

/** Talk-level metadata. Single source of truth for the cover and the closing slide. */
export const talk = {
  title: 'Coding Agents in the Wild',
  speaker: {
    name: 'Ningzhi Tang',
    ldap: 'ningzhitang@',
    roles: ['UX Engineer Intern @ Google', 'PhD Candidate @ University of Notre Dame'],
  },
  venue: 'DevAI Research',
  date: 'August 10, 2026',
} as const

/** The two papers this talk is built on. */
export const papers = [
  {
    key: 'chat',
    number: '①',
    short: 'Programming by Chat',
    title:
      'Programming by Chat: A Large-Scale Behavioral Analysis of 11,579 Real-World AI-Assisted IDE Sessions',
    venue: 'ASE 2026',
    status: 'accepted',
    question: 'How do developers work with coding agents?',
    authors:
      'Ningzhi Tang, Chaoran Chen, Zihan Fang, Gelei Xu, Maria Dhakal, Yiyu Shi, Collin McMillan, Yu Huang, Toby Jia-Jun Li',
    affiliations: 'University of Notre Dame, Vanderbilt University',
    cover: chatCover,
    arxiv: 'https://arxiv.org/abs/2604.00436',
    arxivId: '2604.00436',
    code: 'https://github.com/ND-SaNDwichLAB/empirical-conversational-programming',
    accent: 'primary',
  },
  {
    key: 'misalignment',
    number: '②',
    short: 'Coding Agent Misalignment',
    title:
      'How Coding Agents Fail Their Users: A Large-Scale Analysis of Developer-Agent Misalignment in 20,574 Real-World Sessions',
    venue: 'EMNLP 2026',
    status: 'under submission',
    question: 'Where does collaboration break down?',
    authors:
      'Ningzhi Tang, Chaoran Chen, Gelei Xu, Yiyu Shi, Yu Huang, Collin McMillan, Tao Dong, Toby Jia-Jun Li',
    affiliations: 'University of Notre Dame, Vanderbilt University, Google',
    cover: misalignmentCover,
    arxiv: 'https://arxiv.org/abs/2605.29442',
    arxivId: '2605.29442',
    code: 'https://github.com/ND-SaNDwichLAB/coding-agent-misalignment',
    accent: 'error',
  },
] as const

export type Paper = (typeof papers)[number]
