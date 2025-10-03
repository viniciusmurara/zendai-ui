"use client";

import Image from "next/image";
import { Send } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function Chat() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isMultiLine, setIsMultiLine] = useState(false);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      const text = textarea.value;
      const lineHeight = 24;
      
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      tempDiv.style.visibility = 'hidden';
      tempDiv.style.width = `${textarea.offsetWidth - 64}px`;
      tempDiv.style.font = window.getComputedStyle(textarea).font;
      tempDiv.style.lineHeight = window.getComputedStyle(textarea).lineHeight;
      tempDiv.style.wordWrap = 'break-word';
      tempDiv.textContent = text || textarea.placeholder;
      
      document.body.appendChild(tempDiv);
      const textHeight = tempDiv.offsetHeight;
      document.body.removeChild(tempDiv);
      
      const needsMultipleLines = textHeight > lineHeight || text.includes('\n');
      
      if (needsMultipleLines) {
        textarea.style.height = 'auto';
        const newHeight = textarea.scrollHeight;
        textarea.style.height = `${newHeight}px`;
        setIsMultiLine(true);
      } else {
        textarea.style.height = '56px';
        setIsMultiLine(false);
      }
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = '56px';
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12">
      <Image
        src="/zendai-big-logo.svg"
        alt="Zendai Logo"
        width={144}
        height={144}
        className="h-32 w-auto"
      />
      <p className="text-primary font-semibold text-[42px]">Welcome to ZendAI for daily tasks!</p>
      <p className="text-primary font-medium max-w-96 text-center">Use this text area however you like, writing and brainstorming all your tasks for today.</p>
      <div className="w-32 h-0.5 bg-primary mx-auto mt-[-24]"></div>
      
      <div className="relative max-w-3xl w-full mx-4">
        <textarea
          ref={textareaRef}
          placeholder="Don't worry, we'll organize your ideas for you, just write..."
          onInput={handleInput}
          className={`w-full min-h-[48px] py-3 px-4 ${
            isMultiLine ? 'pr-4 pb-16' : 'pr-12'
          } bg-beige border-2 border-primary rounded-lg resize-none text-primary placeholder-primary-dark focus:outline-none focus:border-primary-light transition-colors overflow-hidden leading-tight`}
          style={{ height: '48px' }}
        />
        <button className={`absolute p-2 bg-primary text-beige hover:bg-primary-light transition-all rounded-lg ${
          isMultiLine 
            ? 'right-2 bottom-3.5' 
            : 'right-2 top-7 transform -translate-y-1/2'
        }`}>
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
