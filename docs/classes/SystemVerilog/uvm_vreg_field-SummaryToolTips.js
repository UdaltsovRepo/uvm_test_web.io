﻿NDSummary.OnToolTipsLoaded("SystemVerilogClass:uvm_vreg_field",{18:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype18\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_vreg_field</div></div></div><div class=\"TTSummary\">Virtual field abstraction class</div></div>",20:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype20\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">extern function</span> new(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">name</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHString\">&quot;uvm_vreg_field&quot;</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"1/6/2/7\" data-NarrowGridArea=\"3/1/4/6\" style=\"grid-area:1/6/2/7\">)</div></div></div></div><div class=\"TTSummary\">Create a new virtual field instance</div></div>",21:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype21\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/4/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/4/2\"><span class=\"SHKeyword\">extern function void</span> configure(</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">uvm_vreg&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">parent,</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">int</span>&nbsp;</div><div class=\"PType\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\"><span class=\"SHKeyword\">unsigned</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">size,</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\"><span class=\"SHKeyword\">int</span>&nbsp;</div><div class=\"PType\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\"><span class=\"SHKeyword\">unsigned</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"3/4/4/5\" data-NarrowGridArea=\"4/3/5/4\" style=\"grid-area:3/4/4/5\">lsb_pos</div><div class=\"PAfterParameters\" data-WideGridArea=\"3/5/4/6\" data-NarrowGridArea=\"5/1/6/5\" style=\"grid-area:3/5/4/6\">)</div></div></div></div><div class=\"TTSummary\">Instance-specific configuration</div></div>",23:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div class=\"TTSummary\">Get the simple name</div></div>",24:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype24\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">extern virtual function string</span> get_full_name()</div></div><div class=\"TTSummary\">Get the hierarchical name</div></div>",25:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype25\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">extern virtual function</span> uvm_vreg get_parent()</div></div><div class=\"TTSummary\">Get the parent virtual register</div></div>",26:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype26\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">extern virtual function int unsigned</span> get_lsb_pos_in_register()</div></div><div class=\"TTSummary\">Return the position of the virtual field / Returns the index of the least significant bit of the virtual field in the virtual register that instantiates it.&nbsp; An offset of 0 indicates a field that is aligned with the least-significant bit of the register.</div></div>",27:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype27\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">extern virtual function int unsigned</span> get_n_bits()</div></div><div class=\"TTSummary\">Returns the width, in bits, of the virtual field.</div></div>",28:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype28\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">extern virtual function string</span> get_access(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_reg_map&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">map</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHKeyword\">null</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"1/6/2/7\" data-NarrowGridArea=\"3/1/4/6\" style=\"grid-area:1/6/2/7\">)</div></div></div></div><div class=\"TTSummary\">Returns the access policy of the virtual field register when written and read via an address map.</div></div>"});