﻿NDSummary.OnToolTipsLoaded("SystemVerilogClass:uvm_event",{1548:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1548\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_event</div></div></div><div class=\"TTSummary\">The uvm_event class is a wrapper class around the SystemVerilog event construct.&nbsp; It provides some additional services such as setting callbacks and maintaining the number of waiters.</div></div>",1550:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1550\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">function</span> new (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">name</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHString\">&quot;&quot;</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"1/6/2/7\" data-NarrowGridArea=\"3/1/4/6\" style=\"grid-area:1/6/2/7\">)</div></div></div></div><div class=\"TTSummary\">Creates a new event object.</div></div>",1551:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1551\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">virtual function void</span> trigger (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_object&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">data</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHKeyword\">null</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"1/6/2/7\" data-NarrowGridArea=\"3/1/4/6\" style=\"grid-area:1/6/2/7\">)</div></div></div></div><div class=\"TTSummary\">Triggers the event, resuming all waiting processes.</div></div>",1552:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1552\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual function</span> uvm_object get_trigger_data ()</div></div><div class=\"TTSummary\">Gets the data, if any, provided by the last call to trigger.</div></div>",1553:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1553\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual function time</span> get_trigger_time ()</div></div><div class=\"TTSummary\">Gets the time that this event was last triggered. If the event has not been triggered, or the event has been reset, then the trigger time will be 0.</div></div>",1554:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1554\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual function bit</span> is_on ()</div></div><div class=\"TTSummary\">Indicates whether the event has been triggered since it was last reset.</div></div>",1555:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1555\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual function bit</span> is_off ()</div></div><div class=\"TTSummary\">Indicates whether the event has been triggered or been reset.</div></div>",1556:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1556\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">virtual function void</span> reset (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">bit</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">wakeup</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHNumber\">0</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"1/6/2/7\" data-NarrowGridArea=\"3/1/4/6\" style=\"grid-area:1/6/2/7\">)</div></div></div></div><div class=\"TTSummary\">Resets the event to its off state. If ~wakeup~ is set, then all processes currently waiting for the event are activated before the reset.</div></div>",1557:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1557\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">virtual function void</span> add_callback (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_event_callback&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">cb,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">bit</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">append</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\"><span class=\"SHNumber\">1</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"2/6/3/7\" data-NarrowGridArea=\"4/1/5/6\" style=\"grid-area:2/6/3/7\">)</div></div></div></div><div class=\"TTSummary\">Registers a callback object, ~cb~, with this event. The callback object may include pre_trigger and post_trigger functionality. If ~append~ is set to 1, the default, ~cb~ is added to the back of the callback list. Otherwise, ~cb~ is placed at the front of the callback list.</div></div>",1558:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1558\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">virtual function void</span> delete_callback (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_event_callback&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">cb</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"3/1/4/4\" style=\"grid-area:1/4/2/5\">)</div></div></div></div><div class=\"TTSummary\">Unregisters the given callback, ~cb~, from this event.</div></div>",1559:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1559\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual function void</span> cancel ()</div></div><div class=\"TTSummary\">Decrements the number of waiters on the event.</div></div>",1560:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1560\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual function int</span> get_num_waiters ()</div></div><div class=\"TTSummary\">Returns the number of processes waiting on the event.</div></div>"});