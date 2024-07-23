﻿NDContentPage.OnToolTipsLoaded({1801:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1801\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">virtual</span></div><div class=\"CPName\">uvm_resource_base</div></div></div><div class=\"TTSummary\">Non-parameterized base class for resources.&nbsp; Supports interfaces for scope matching, and virtual functions for printing the resource and for printing the accessor list</div></div>",1852:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1852\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">function</span> uvm_resource_base get_type_handle()</div></div><div class=\"TTSummary\">Returns the static type handle of this resource in a polymorphic fashion.&nbsp; The return type of get_type_handle() is uvm_resource_base.&nbsp; This function is not static and therefore can only be used by instances of a parameterized resource.</div></div>",1859:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1859\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">function</span> T read(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_object&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">accessor</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHKeyword\">null</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"1/6/2/7\" data-NarrowGridArea=\"3/1/4/6\" style=\"grid-area:1/6/2/7\">)</div></div></div></div><div class=\"TTSummary\">Return the object stored in the resource container.&nbsp; If an ~accessor~ object is supplied then also update the accessor record for this resource.</div></div>",1860:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1860\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">function void</span> write(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">T&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">t,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">uvm_object&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">accessor</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\"><span class=\"SHKeyword\">null</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"2/6/3/7\" data-NarrowGridArea=\"4/1/5/6\" style=\"grid-area:2/6/3/7\">)</div></div></div></div><div class=\"TTSummary\">Modify the object stored in this resource container.&nbsp; If the resource is read-only then issue an error message and return without modifying the object in the container.&nbsp; If the resource is not read-only and an ~accessor~ object has been supplied then also update the accessor record.&nbsp; Lastly, replace the object value in the container with the value supplied as the argument, ~t~, and release any processes blocked on &lt;uvm_resource_base::wait_modified&gt;.&nbsp; If the value to be written is the same as the value already present in the resource then the write is not done.&nbsp; That also means that the accessor record is not updated and the modified bit is not set.</div></div>",2095:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2095\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">virtual</span></div><div class=\"CPName\">uvm_object</div></div></div><div class=\"TTSummary\">The uvm_object class is the base class for all UVM data and hierarchical classes. Its primary role is to define a set of methods for such common operations as create, copy, compare, print, and record. Classes deriving from uvm_object must implement the pure virtual methods such as create and get_type_name.</div></div>"});