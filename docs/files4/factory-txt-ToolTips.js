﻿NDContentPage.OnToolTipsLoaded({1888:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1888\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_component_registry#<span class=\"TemplateSignature\"> #(<span class=\"SHKeyword\">type</span> T=uvm_component, <span class=\"SHKeyword\">string</span> Tname=<span class=\"SHString\">&quot;&lt;unknown&gt;&quot;</span>)</span></div></div></div><div class=\"TTSummary\">The uvm_component_registry serves as a lightweight proxy for a component of type ~T~ and type name ~Tname~, a string. The proxy enables efficient registration with the uvm_factory. Without it, registration would require an instance of the component itself.</div></div>",1896:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1896\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_object_registry#<span class=\"TemplateSignature\"> #(<span class=\"SHKeyword\">type</span> T=uvm_object, <span class=\"SHKeyword\">string</span> Tname=<span class=\"SHString\">&quot;&lt;unknown&gt;&quot;</span>)</span></div></div></div><div class=\"TTSummary\">The uvm_object_registry serves as a lightweight proxy for an uvm_object of type ~T~ and type name ~Tname~, a string. The proxy enables efficient registration with the uvm_factory. Without it, registration would require an instance of the object itself.</div></div>",2037:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2037\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_factory</div></div></div><div class=\"TTSummary\">As the name implies, uvm_factory is used to manufacture (create) UVM objects and components. Only one instance of the factory is present in a given simulation (termed a singleton). Object and component types are registered with the factory using lightweight proxies to the actual objects and components being created. The uvm_object_registry #(T,Tname) and uvm_component_registry #(T,Tname) class are used to proxy uvm_objects and uvm_components.</div></div>",2047:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2047\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/4/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/4/2\"><span class=\"SHKeyword\">extern function</span> uvm_object create_object_by_type (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_object_wrapper&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">requested_type,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">parent_inst_path</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\"><span class=\"SHString\">&quot;&quot;</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">name</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"3/4/4/5\" data-NarrowGridArea=\"4/3/5/4\" style=\"grid-area:3/4/4/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"3/5/4/6\" data-NarrowGridArea=\"4/4/5/5\" style=\"grid-area:3/5/4/6\"><span class=\"SHString\">&quot;&quot;</span></div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"3/6/4/7\" data-NarrowGridArea=\"5/1/6/6\" style=\"grid-area:3/6/4/7\">)</div></div></div></div></div>",2057:"<div class=\"NDToolTip TGroup LSystemVerilog\"><div class=\"TTSummary\">Using the factory involves three basic operations</div></div>"});