import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="p-4 sm:p-8 pb-24 md:pb-8 max-w-3xl mx-auto flex items-center justify-center min-h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full"
      >
        <div className="font-mono text-xs sm:text-base leading-relaxed sm:leading-loose p-4 sm:p-8 bg-[#0F1319] border border-vscode-border rounded-xl shadow-2xl text-vscode-text overflow-hidden">
          <div><span className="text-vscode-purple">const</span> <span className="text-vscode-blue">contactInfo</span> = {'{'}</div>

          <div className="pl-3 sm:pl-6 space-y-2 sm:space-y-1 my-2">
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-vscode-blue">"name"</span>
              <span className="text-vscode-text">:</span>
              <span className="text-vscode-green break-all">"Victor Hugo"</span>,
            </div>

            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-vscode-blue">"role"</span>
              <span className="text-vscode-text">:</span>
              <span className="text-vscode-green break-words">"Software Engineer & Tech Lead"</span>,
            </div>

            <div className="flex flex-wrap items-baseline gap-x-2 pt-2">
              <span className="text-vscode-blue">"github"</span>
              <span className="text-vscode-text">:</span>
              <a
                href="https://github.com/VictorHugofny"
                target="_blank"
                rel="noreferrer"
                className="text-vscode-yellow hover:underline break-all"
              >
                "https://github.com/VictorHugofny"
              </a>,
            </div>

            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-vscode-blue">"linkedin"</span>
              <span className="text-vscode-text">:</span>
              <a
                href="https://www.linkedin.com/in/victor-hugo-santana/"
                target="_blank"
                rel="noreferrer"
                className="text-vscode-yellow hover:underline break-all"
              >
                "https://www.linkedin.com/in/victor-hugo-santana/"
              </a>,
            </div>

            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-vscode-blue">"email"</span>
              <span className="text-vscode-text">:</span>
              <a
                href="mailto:victorhugofny@gmail.com"
                className="text-vscode-yellow hover:underline break-all"
              >
                "victorhugofny@gmail.com"
              </a>
            </div>
          </div>

          <div>{'};'}</div>
        </div>
      </motion.div>
    </div>
  );
}
