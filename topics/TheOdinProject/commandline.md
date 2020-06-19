## Conquering the Command Line - Chapter 1
1.1 - Home Directory (```~```)
- It is common to see a tilde (```~```) in place of the full path for a home directory
- The home directory is where your settings files get stored and where your desktop is kept. The home directory (or subdirectories under your home directory) is also where you will save documents and files

1.2 - Present Working Directory (```pwd```)
- Use the ```pwd``` directory to find out where you are
- By default, pwd will list the "logical" path of your current directory. This means it will treat symlinked paths as if they were actual paths
- If you want to see the actual physical path, with all of the symlinks resolved, we can use the -P flag, ```pwd -P```

1.3 - List Files and Directories (```ls```)
- By default ```ls``` will show the list of folders and files in the current directory
- You can also pass a path to search through a directory you are currently not in, ```ls /usr/local```
- Use the ```-a``` flag to see both "visible" and "hidden" files
` Use the ```-l``` flag to list out the names of files and directories as well as give more detailed information about them. If the ```-l``` option is given, the following information is displayed for each file: file mode, number of links, owner name, group name, number of bytes in the file, abbreviated month, day-of-month file was last modified, minute file last modified, and the pathname. Some paths will be followed by ```->```, which means that these 0paths are symlinked to the other directories that follow the ```->```.
- Use the ```-h``` flag to give us more human readable file sizes
- Use the ```-s``` flag to sort the results of ```ls``` by file size
- Use the ```-t``` flag to sort the results of ```ls``` by time last modified
- Use the ```-r``` flag to reverse the results of ```ls```

1.4 - Links (```ln```)
- Links allow us to create an association from one file or directory to another. A link allows us to "point" one file or directory to another.
- Links can either be "hard" or "symbolic"

1.4.1 - Hard Links
- By default, the ```ln``` command will create a hard link between files
- Hard links create an identical copy of the linked file on disk, that gets updated automatically as the source file gets updated. If the content of the source is changed, so will the target file
- Use the ```-f``` flag to force a link

1.4.3 - Symbolic Links (```-s```)
- Hard links do not work for directories
- Symbolic links can also link to files or directories on other file systems. This makes them more powerful, and more common than the default hard links

1.5 - Change Directories (```cd```)
- To use ```cd``` pass the path of the directory you wish to navigate to
- Use ```..``` to navigate up
- Call ```cd``` without any arguments to navigate to the home directory

1.6 - Creating Directories (```mkdir```)
- To create a directory use the ```mkdir``` command followed by the name of the directory we wish to create
- Use the ```-p``` flag to create nested directories, ```mkdir -p a/b/c```
- Use the ```-v``` flag for verbose mode (outputting the results of the command to the console)

1.7 - Copying Files (```cp```)
- Use the ```cp``` command to copy files. The first argument is the file we want to copy. The second argument, or target, is the location we want to copy the source file to
- ```cp``` will allow you to list several files you would like to copy but the last argument <i>must</i> be a directory. The original source file names will be used as the names of the new files in the target directory.
- Use the ```-R``` flag to recursively copy the directory's contents to a new directory

1.8 - Removing files (```rm```)
- The ```rm``` command is used to delete files and folders. It supports the same flags and arguments as the ```cp``` command.

1.9 - Moving Files (```mv```)
- ```mv``` supports the same flags as ```cp```. In reality, the ```mv``` command is really just a combination of cp and rm to achieve the desired outcome of moving a file from one location to another

1.10 - Input/Output (```|, >```)

1.10.1 - Redirecting Output (```|```)
- ```|``` is known as the pipe operator
- In the following example, we "pipe" the output of the ```ls``` command to the input of the ```grep``` command to find all the files in my home directory that contain an underscore
```
$ ls -a ~ | grep _
```
- When using the ```|``` operator we can chain together any number of commands  

1.10.2 - Writing to a file (```>```)
- In addition to redirecting output from one process and sending it to another process, we can also write tha toutput to a file using the ```>``` operator
```
$ ls -a ~ | grep _ > underscores.txt
```

1.10.3 Reading from a File (```<```)
- If we want to read data from a file you can use ```<```