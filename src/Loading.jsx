import React from "react";

function Loading() {
  return (
    <div class="border-slate-200 dark:border-slate-500 border  shadow-lg rounded-md p-4 max-w-md w-full mx-auto">
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-slate-200 dark:bg-slate-500 rounded"></div>
          <div class="h-2 bg-slate-200 rounded dark:bg-slate-500"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-200 dark:bg-slate-500 rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
