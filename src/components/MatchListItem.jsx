import React from 'react'

function MatchListItem({ title, description, tick = true}) { 
  return tick ? (
    <li className="flex justify-between w-[90%] mx-8 bg-button_light/20 dark:bg-button_dark/30 rounded-xl p-4">
                <div>
                  <p className="text-sm font-thin dark:text-bg_light/60">{title}</p>
                  <p className="text-2xl">{description}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  className="w-12 h-12 stroke-green-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </li>
  ) : (
    <li className="flex justify-between w-[90%] mx-8 bg-button_light/10 dark:bg-button_dark/10 rounded-xl p-4">
                <div>
                  <p className="text-sm font-thin dark:text-bg_light/60">
                    {title}
                  </p>
                  <p className="text-2xl">{description}</p>
                </div><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 stroke-blue-gray-700/50"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </li>
  )
}

export default MatchListItem