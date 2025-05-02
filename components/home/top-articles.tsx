import React from 'react'
import { Card } from '../ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from '../ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';

const TopArticles = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <Card className={cn(
            "group relative overflow-hidden transition-all hover:scale-[1.02]",
            "border border-gray-200/50 dark:border-white/10",
            "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
          )}
          >
            <div className='p-6'>
              <Link href={`articles/${1234}`}>
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
                <Image
                src="https://images.unsplash.com/photo-1549082984-1323b94df9a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Article Image" 
                fill
                className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <Avatar className="h-8 w-8">
                  <AvatarImage src=""/>
                  <AvatarFallback className="flex items-center justify-center h-full w-full text-s">GJ</AvatarFallback>
                </Avatar>
                <span>Garima Jain</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                How to become a frontend web developer in 2025
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Web Development</p>

              <div className="mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>
                  2 May
                </span>
                <span>{12} min to read</span>
              </div>
              </Link>
            </div>
      </Card>
    </div>
  )
}

export default TopArticles