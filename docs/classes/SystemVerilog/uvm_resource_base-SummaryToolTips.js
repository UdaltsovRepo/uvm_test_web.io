﻿NDSummary.OnToolTipsLoaded("SystemVerilogClass:uvm_resource_base",{1801:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1801\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">virtual</span></div><div class=\"CPName\">uvm_resource_base</div></div></div><div class=\"TTSummary\">Non-parameterized base class for resources.&nbsp; Supports interfaces for scope matching, and virtual functions for printing the resource and for printing the accessor list</div></div>",1802:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype1802\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int unsigned</span> precedence</div></div><div class=\"TTSummary\">This variable is used to associate a precedence that a resource has with respect to other resources which match the same scope and name. Resources are set to the default_precedence initially, and may be set to a higher or lower precedence as desired.</div></div>",1803:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype1803\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static int unsigned</span> default_precedence = <span class=\"SHNumber\">1000</span></div></div><div class=\"TTSummary\">The default precedence for an resource that has been created.&nbsp; When two resources have the same precedence, the first resource found has precedence.</div></div>",1804:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1804\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">function</span> new(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">name</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHString\">&quot;&quot;</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">s</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\"><span class=\"SHString\">&quot;*&quot;</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"2/6/3/7\" data-NarrowGridArea=\"4/1/5/6\" style=\"grid-area:2/6/3/7\">)</div></div></div></div><div class=\"TTSummary\">constructor for uvm_resource_base.&nbsp; The constructor takes two arguments, the name of the resource and a resgular expression which represents the set of scopes over which this resource is visible.</div></div>",1805:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1805\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">pure virtual function</span> uvm_resource_base get_type_handle()</div></div><div class=\"TTSummary\">Pure virtual function that returns the type handle of the resource container.</div></div>",1807:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1807\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">function void</span> set_read_only()</div></div><div class=\"TTSummary\">Establishes this resource as a read-only resource.&nbsp; An attempt to call &lt;uvm_resource#(T)::write&gt; on the resource will cause an error.</div></div>",1808:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1808\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">function bit</span> is_read_only()</div></div><div class=\"TTSummary\">Retruns one if this resource has been set to read-only, zero otherwise</div></div>",1810:"<div class=\"NDToolTip TGroup LSystemVerilog\"><div class=\"TTSummary\">Each resource has a name, a value and a set of scopes over which it is visible. A scope is a hierarchical entity or a context.&nbsp; A scope name is a multi-element string that identifies a scope.&nbsp; Each element refers to a scope context and the elements are separated by dots (.).</div></div>",1811:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1811\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">function void</span> set_scope(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">s</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"3/1/4/4\" style=\"grid-area:1/4/2/5\">)</div></div></div></div><div class=\"TTSummary\">Set the value of the regular expression that identifies the set of scopes over which this resource is visible.&nbsp; If the supplied argument is a glob it will be converted to a regular expression before it is stored.</div></div>",1812:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1812\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">function string</span> get_scope()</div></div><div class=\"TTSummary\">Retrieve the regular expression string that identifies the set of scopes over which this resource is visible.</div></div>",1813:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1813\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">function bit</span> match_scope(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">s</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"3/1/4/4\" style=\"grid-area:1/4/2/5\">)</div></div></div></div><div class=\"TTSummary\">Using the regular expression facility, determine if this resource is visible in a scope.&nbsp; Return one if it is, zero otherwise.</div></div>",1814:"<div class=\"NDToolTip TGroup LSystemVerilog\"><div class=\"TTSummary\">Functions for manipulating the search priority of resources.&nbsp; The function definitions here are pure virtual and are implemented in derived classes.&nbsp; The definitons serve as a priority management interface.</div></div>",1815:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div class=\"TTSummary\">Change the search priority of the resource based on the value of the priority enum argument.</div></div>",1817:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1817\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">function void</span> do_print (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_printer&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">printer</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"3/1/4/4\" style=\"grid-area:1/4/2/5\">)</div></div></div></div><div class=\"TTSummary\">Implementation of do_print which is called by print().</div></div>",1818:"<div class=\"NDToolTip TGroup LSystemVerilog\"><div class=\"TTSummary\">To find out what is happening as the simulation proceeds, an audit trail of each read and write is kept. The read and write methods in uvm_resource#(T) each take an accessor argument.&nbsp; This is a handle to the object that performed that resource access.</div></div>",1819:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1819\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">function void</span> record_read_access(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_object&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">accessor</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHKeyword\">null</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"1/6/2/7\" data-NarrowGridArea=\"3/1/4/6\" style=\"grid-area:1/6/2/7\">)</div></div></div></div></div>",1820:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1820\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">function void</span> record_write_access(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_object&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">accessor</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHKeyword\">null</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"1/6/2/7\" data-NarrowGridArea=\"3/1/4/6\" style=\"grid-area:1/6/2/7\">)</div></div></div></div></div>",1821:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1821\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual function void</span> print_accessors()</div></div><div class=\"TTSummary\">Dump the access records for this resource</div></div>",1822:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1822\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">function void</span> init_access_record (</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">inout</span> uvm_resource_types::</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">access_t&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">access_record</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"3/1/4/5\" style=\"grid-area:1/5/2/6\">)</div></div></div></div><div class=\"TTSummary\">Initalize a new access record</div></div>"});