﻿NDContentPage.OnToolTipsLoaded({794:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype794\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">virtual</span></div><div class=\"CPName\">uvm_printer</div></div></div><div class=\"TTSummary\">The uvm_printer class provides an interface for printing uvm_objects in various formats. Subtypes of uvm_printer implement different print formats, or policies.</div></div>",1795:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1795\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_resource_types</div></div></div><div class=\"TTSummary\">Provides typedefs and enums used throughout the resources facility.&nbsp; This class has no members or methods, only typedefs.&nbsp; It\'s used in lieu of package-scope types.&nbsp; When needed, other classes can use these types by prefixing their usage with uvm_resource_types::.&nbsp; E.g.</div></div>",1796:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"TTSummary\">Provides a namespace for managing options for the resources facility.&nbsp; The only thing allowed in this class is static local data members and static functions for manipulating and retrieving the value of the data members.&nbsp; The static local data members represent options and settings that control the behavior of the resources facility.</div></div>",1801:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1801\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">virtual</span></div><div class=\"CPName\">uvm_resource_base</div></div></div><div class=\"TTSummary\">Non-parameterized base class for resources.&nbsp; Supports interfaces for scope matching, and virtual functions for printing the resource and for printing the accessor list</div></div>",1803:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype1803\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static int unsigned</span> default_precedence = <span class=\"SHNumber\">1000</span></div></div><div class=\"TTSummary\">The default precedence for an resource that has been created.&nbsp; When two resources have the same precedence, the first resource found has precedence.</div></div>",1823:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1823\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_resource_pool</div></div></div><div class=\"TTSummary\">The global (singleton) resource database.</div></div>",1827:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1827\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"7\" data-NarrowColumnCount=\"6\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/7\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">function void</span> set (</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">uvm_resource_base&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">rsrc,</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">uvm_resource_types::</div><div class=\"PType\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">override_t&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">override</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"2/6/3/7\" data-NarrowGridArea=\"3/5/4/6\" style=\"grid-area:2/6/3/7\"><span class=\"SHNumber\">0</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"2/7/3/8\" data-NarrowGridArea=\"4/1/5/7\" style=\"grid-area:2/7/3/8\">)</div></div></div></div><div class=\"TTSummary\">Add a new resource to the resource pool.&nbsp; The resource is inserted into both the name map and type map so it can be located by either.</div></div>",1828:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1828\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">function void</span> set_override(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_resource_base&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">rsrc</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"3/1/4/4\" style=\"grid-area:1/4/2/5\">)</div></div></div></div><div class=\"TTSummary\">The resource provided as an argument will be entered into the pool and will override both by name and type.</div></div>",1829:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1829\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">function void</span> set_name_override(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_resource_base&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">rsrc</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"3/1/4/4\" style=\"grid-area:1/4/2/5\">)</div></div></div></div><div class=\"TTSummary\">The resource provided as an argument will entered into the pool using normal precedence in the type map and will override the name.</div></div>",1830:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1830\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">function void</span> set_type_override(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_resource_base&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">rsrc</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"3/1/4/4\" style=\"grid-area:1/4/2/5\">)</div></div></div></div><div class=\"TTSummary\">The resource provided as an argument will be entered into the pool using noraml precedence in the name map and will override the type.</div></div>",1832:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1832\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/5/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/5/2\"><span class=\"SHKeyword\">function</span> uvm_resource_types::rsrc_q_t lookup_name(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">scope</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHString\">&quot;&quot;</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">name,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\">uvm_resource_base&nbsp;</div><div class=\"PName\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">type_handle</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"3/4/4/5\" data-NarrowGridArea=\"4/3/5/4\" style=\"grid-area:3/4/4/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"3/5/4/6\" data-NarrowGridArea=\"4/4/5/5\" style=\"grid-area:3/5/4/6\"><span class=\"SHKeyword\">null</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"4/2/5/3\" data-NarrowGridArea=\"5/1/6/2\" style=\"grid-area:4/2/5/3\"><span class=\"SHKeyword\">bit</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"4/3/5/4\" data-NarrowGridArea=\"5/2/6/3\" style=\"grid-area:4/3/5/4\">rpterr</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"4/4/5/5\" data-NarrowGridArea=\"5/3/6/4\" style=\"grid-area:4/4/5/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"4/5/5/6\" data-NarrowGridArea=\"5/4/6/5\" style=\"grid-area:4/5/5/6\"><span class=\"SHNumber\">1</span></div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"4/6/5/7\" data-NarrowGridArea=\"6/1/7/6\" style=\"grid-area:4/6/5/7\">)</div></div></div></div><div class=\"TTSummary\">Lookup resources by ~name~.&nbsp; Returns a queue of resources that match the ~name~, ~scope~, and ~type_handle~.&nbsp; If no resources match the queue is returned empty. If ~rpterr~ is set then a warning is issued if no matches are found, and the spell checker is invoked on ~name~.&nbsp; If ~type_handle~ is null then a type check is not made and resources are returned that match only ~name~ and ~scope~.</div></div>",1833:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1833\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">function</span> uvm_resource_base get_highest_precedence(</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">ref</span> uvm_resource_types::</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">rsrc_q_t&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">q</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"3/1/4/5\" style=\"grid-area:1/5/2/6\">)</div></div></div></div><div class=\"TTSummary\">Traverse a queue, ~q~, of resources and return the one with the highest precedence.&nbsp; In the case where there exists more than one resource with the highest precedence value, the first one that has that precedence will be the one that is returned.</div></div>",1835:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1835\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/5/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/5/2\"><span class=\"SHKeyword\">function</span> uvm_resource_base get_by_name(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">scope</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHString\">&quot;&quot;</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">name,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\">uvm_resource_base&nbsp;</div><div class=\"PName\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">type_handle,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"4/2/5/3\" data-NarrowGridArea=\"5/1/6/2\" style=\"grid-area:4/2/5/3\"><span class=\"SHKeyword\">bit</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"4/3/5/4\" data-NarrowGridArea=\"5/2/6/3\" style=\"grid-area:4/3/5/4\">rpterr</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"4/4/5/5\" data-NarrowGridArea=\"5/3/6/4\" style=\"grid-area:4/4/5/5\">=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"4/5/5/6\" data-NarrowGridArea=\"5/4/6/5\" style=\"grid-area:4/5/5/6\"><span class=\"SHNumber\">1</span></div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"4/6/5/7\" data-NarrowGridArea=\"6/1/7/6\" style=\"grid-area:4/6/5/7\">)</div></div></div></div><div class=\"TTSummary\">Lookup a resource by ~name~, ~scope~, and ~type_handle~.&nbsp; Whether the get succeeds or fails, save a record of the get attempt.&nbsp; The ~rpterr~ flag indicates whether to report errors or not.&nbsp; Essentially, it serves as a verbose flag.&nbsp; If set then the spell checker will be invoked and warnings about multiple resources will be produced.</div></div>",1836:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1836\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">function</span> uvm_resource_types::rsrc_q_t lookup_type(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">scope</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHString\">&quot;&quot;</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">uvm_resource_base&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">type_handle</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"2/6/3/7\" data-NarrowGridArea=\"4/1/5/6\" style=\"grid-area:2/6/3/7\">)</div></div></div></div><div class=\"TTSummary\">Lookup resources by type. Return a queue of resources that match the ~type_handle~ and ~scope~.&nbsp; If no resources match then the returned queue is empty.</div></div>",1837:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1837\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">function</span> uvm_resource_base get_by_type(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">scope</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHString\">&quot;&quot;</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">uvm_resource_base&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">type_handle</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"2/6/3/7\" data-NarrowGridArea=\"4/1/5/6\" style=\"grid-area:2/6/3/7\">)</div></div></div></div><div class=\"TTSummary\">Lookup a resource by ~type_handle~ and ~scope~.&nbsp; Insert a record into the get history list whether or not the get succeeded.</div></div>",1840:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1840\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">function</span> uvm_resource_types::rsrc_q_t lookup_scope(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">scope</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"3/1/4/4\" style=\"grid-area:1/4/2/5\">)</div></div></div></div><div class=\"TTSummary\">This is a utility function that answers the question: For a given ~scope~, what resources are visible to it?&nbsp; Locate all the resources that are visible to a particular scope.&nbsp; This operation could be quite expensive, as it has to traverse all of the resources in the database.</div></div>",1849:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1849\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_resource#<span class=\"TemplateSignature\"> #(<span class=\"SHKeyword\">type</span> T=<span class=\"SHKeyword\">int</span>)</span></div></div></div><div class=\"TTSummary\">Parameterized resource.&nbsp; Provides essential access methods to read from and write to the resource database.</div></div>",1852:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1852\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">function</span> uvm_resource_base get_type_handle()</div></div><div class=\"TTSummary\">Returns the static type handle of this resource in a polymorphic fashion.&nbsp; The return type of get_type_handle() is uvm_resource_base.&nbsp; This function is not static and therefore can only be used by instances of a parameterized resource.</div></div>",1859:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1859\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">function</span> T read(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_object&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">accessor</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHKeyword\">null</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"1/6/2/7\" data-NarrowGridArea=\"3/1/4/6\" style=\"grid-area:1/6/2/7\">)</div></div></div></div><div class=\"TTSummary\">Return the object stored in the resource container.&nbsp; If an ~accessor~ object is supplied then also update the accessor record for this resource.</div></div>",1860:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1860\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">function void</span> write(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">T&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">t,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">uvm_object&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">accessor</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\"><span class=\"SHKeyword\">null</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"2/6/3/7\" data-NarrowGridArea=\"4/1/5/6\" style=\"grid-area:2/6/3/7\">)</div></div></div></div><div class=\"TTSummary\">Modify the object stored in this resource container.&nbsp; If the resource is read-only then issue an error message and return without modifying the object in the container.&nbsp; If the resource is not read-only and an ~accessor~ object has been supplied then also update the accessor record.&nbsp; Lastly, replace the object value in the container with the value supplied as the argument, ~t~, and release any processes blocked on &lt;uvm_resource_base::wait_modified&gt;.&nbsp; If the value to be written is the same as the value already present in the resource then the write is not done.&nbsp; That also means that the accessor record is not updated and the modified bit is not set.</div></div>",2095:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2095\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">virtual</span></div><div class=\"CPName\">uvm_object</div></div></div><div class=\"TTSummary\">The uvm_object class is the base class for all UVM data and hierarchical classes. Its primary role is to define a set of methods for such common operations as create, copy, compare, print, and record. Classes deriving from uvm_object must implement the pure virtual methods such as create and get_type_name.</div></div>",1849:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1849\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_resource#<span class=\"TemplateSignature\"> #(<span class=\"SHKeyword\">type</span> T=<span class=\"SHKeyword\">int</span>)</span></div></div></div><div class=\"TTSummary\">Parameterized resource.&nbsp; Provides essential access methods to read from and write to the resource database.</div></div>"});