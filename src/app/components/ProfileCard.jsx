import React from 'react'

export default function ProfileCard({id , username , email , password }) {
  return (
    <div className="border-[1px] border-zinc-400/30 m-6 p-6  hover:border-gray-300/70">
            <form action="">
                <div className="">
                    <label htmlFor="username">username</label>
                    <h3>{username}</h3>
                </div>
                <div className="">
                    <label htmlFor="email">email</label>
                    <h3>{email}</h3>
                </div>
                <div className="">
                    <label htmlFor="password">username</label>
                    <h3>{password}</h3>
                </div>
            </form>
            
        </div>
  )
}
