# Docs

## Commands

Commands are preceded with a `\` character. Contents may be optional, and are contained with in brackets `{}` Modifiers proceed the brackets without a space, and are optional to all commands.

```
\example{Contents}a
```

or

```
\example {
    contents
}a
```
a being a modifier in this case.

### \cover

This is the cover page for the document, there are optional fields, which are each on an indent, followed by a comma, space, and the contents of those fields, here is a demosntrational example:

```
\cover{
    title, Script Title
    name, name
    drby, Director
    wrtby, Writer
    wdby, Writer-Director
    crite, copywrite
    id, some-id
    RD
    FD
    basedon, The something by someone
    note, some note
}
```
* wrby: Written by:
* name: name of episode
* wdby: Written and Directed By
* drby: Directed By
* crite: copywrite message, appended in small characters to the bottom. 
* RD/FD: indicate if it is a final or rough draft, leave blank to not specify
* basedon: kinda self explainatory
* note: right adjusted, for some other information as needed.

For multiple of any field in the title page, simple use the & symbol, for example `wrtby, John & Jane Doe`. (This is not actually proccessed by the system)

### \clist

This is the cast list. On a new indent, it goes as follows: 

character name, id, cast member

cast member being optional, the title of the cast list imediatly follows the command on the same line, for example 

```
\clist{Guest Staring
Character Name, id, Actor Name
}
```

The clist title gets automatically all capsed. 

**The modifier v makes this visible, it is hidden by default**

*On Cast ID's:*

Once a characters id is tied to them, their name as written in the clist can be invoked any where in the document by writing a `/` followed by there id. This will make their name follow the all caps script protocal.

### \item 

Item creates a number, and period, in order. The brackets following \item are optional, if there is something included in there, gets set in the same line in the number, and its all caps-ed

### \blurb

this creates a right aligned text blob, non indented,  block of simple text, important for setting the scene and providing information regarding the characters actions

### \expo

A center aligned blurb, useful if you want to distinguish between lore dumps and characters actions, but optional

### \ping

this is a period of dialogue, ping ponging between two characters, the set up is like this 

```
\ping{/id /name
    words spoken by id
    more words spoken by id

    words spoken by name
}
```

so the two characters are written on the same line as the command, and invoked with a `/` and either their name or id, then a single indent, means two and a double indent means the other character is speaking. 

## Dialoge

To write dialogue, on any line use a `/` followed by a character id or name *if the id does not exist, it will be treated as a name*. then a space and then the lines. To add a parethesized modifier to the way the character speaks, plase a `.` and then the words direct after. such as 

```
/luke.echoing I think we took a wrong turn
```

If your modifier has two words seperated by a space such as (on phone) place another `.`

```
/Harry.on.phone I cannot hear you
```

