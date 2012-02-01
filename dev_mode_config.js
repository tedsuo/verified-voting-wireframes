// # DEV MODE
module.exports = {

// ## watch_list
// List of files and directories to monitor.
// Not recursive.
  watch_list: [
    'less',
    'templates',
    'templates/pages'
  ],

// ## processes
  processes: [

// ### dev server
    {
      name: 'Dev Server http:/localhost:9003/',
      prompt: 'D',
      color: 'magenta',
      command: 'ace',
      args: ['-p','9003']
    },

// ### build mustache 
    {
      name: 'Building Mustache',
      prompt: 'B',
      color: 'gray',
      command: 'make',
      args: []
    }

  ]
}
