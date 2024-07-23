﻿NDContentPage.OnToolTipsLoaded({54:"<div class=\"NDToolTip TType LSystemVerilog\"><div class=\"TTSummary\">The bitstream type is used as a argument type for passing integral values in such methods as set_int_local, get_int_local, get_config_int, report, pack and unpack.</div></div>",55:"<div class=\"NDToolTip TEnumeration LSystemVerilog\"><div class=\"TTSummary\">Specifies the radix to print or record in.</div></div>",64:"<div class=\"NDToolTip TEnumeration LSystemVerilog\"><div class=\"TTSummary\">Specifies the policy for copying objects.</div></div>",158:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype158\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">uvm_recorder uvm_default_recorder = <span class=\"SHKeyword\">new</span>()</div></div><div class=\"TTSummary\">The default recording policy. Used when calls to uvm_object::record do not specify a recorder policy.</div></div>",653:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype653\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bit</span> abstract = <span class=\"SHNumber\">1</span></div></div><div class=\"TTSummary\">This bit provides a filtering mechanism for fields.</div></div>",655:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype655\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">uvm_recursion_policy_enum policy = UVM_DEFAULT_POLICY</div></div><div class=\"TTSummary\">Sets the recursion policy for recording objects.</div></div>",658:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype658\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/5/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/5/2\"><span class=\"SHKeyword\">virtual function void</span> record_field (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">name,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">uvm_bitstream_t&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">value,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\"><span class=\"SHKeyword\">int</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">size,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"4/2/5/3\" data-NarrowGridArea=\"5/1/6/2\" style=\"grid-area:4/2/5/3\">uvm_radix_enum&nbsp;</div><div class=\"PName\" data-WideGridArea=\"4/3/5/4\" data-NarrowGridArea=\"5/2/6/3\" style=\"grid-area:4/3/5/4\">radix</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"4/4/5/5\" data-NarrowGridArea=\"5/3/6/4\" style=\"grid-area:4/4/5/5\">=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"4/5/5/6\" data-NarrowGridArea=\"5/4/6/5\" style=\"grid-area:4/5/5/6\">UVM_NORADIX</div><div class=\"PAfterParameters\" data-WideGridArea=\"4/6/5/7\" data-NarrowGridArea=\"6/1/7/6\" style=\"grid-area:4/6/5/7\">)</div></div></div></div><div class=\"TTSummary\">Records an integral field (less than or equal to 4096 bits). ~name~ is the name of the field.</div></div>",1145:"<div class=\"NDToolTip TMacro LSystemVerilog\"><div class=\"TTSummary\">Macro for recording name-value pairs into a transaction recording database.&nbsp; Requires a valid transaction handle, as provided by the uvm_transaction::begin_tr and uvm_component::begin_tr methods.</div></div>",2095:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2095\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">virtual</span></div><div class=\"CPName\">uvm_object</div></div></div><div class=\"TTSummary\">The uvm_object class is the base class for all UVM data and hierarchical classes. Its primary role is to define a set of methods for such common operations as create, copy, compare, print, and record. Classes deriving from uvm_object must implement the pure virtual methods such as create and get_type_name.</div></div>",2118:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2118\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">extern function void</span> record (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_recorder&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">recorder</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHKeyword\">null</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"1/6/2/7\" data-NarrowGridArea=\"3/1/4/6\" style=\"grid-area:1/6/2/7\">)</div></div></div></div><div class=\"TTSummary\">The record method deep-records this object\'s properties according to an optional ~recorder~ policy. The method is not virtual and must not be overloaded. To include additional fields in the record operation, derived classes should override the do_record method.</div></div>",2119:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2119\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">extern virtual function void</span> do_record (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_recorder&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">recorder</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"3/1/4/4\" style=\"grid-area:1/4/2/5\">)</div></div></div></div><div class=\"TTSummary\">The do_record method is the user-definable hook called by the record method. A derived class should override this method to include its fields in a record operation.</div></div>"});