﻿NDSummary.OnToolTipsLoaded("SystemVerilogClass:uvm_transaction",{2140:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2140\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">virtual</span></div><div class=\"CPName\">uvm_transaction</div></div></div><div class=\"TTSummary\">The uvm_transaction class is the root base class for UVM transactions.&nbsp; Inheriting all the methods of uvm_object, uvm_transaction adds a timing and recording interface.</div></div>",2142:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2142\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">extern function</span> new (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">name</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHString\">&quot;&quot;</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">uvm_component&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">initiator</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\"><span class=\"SHKeyword\">null</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"2/6/3/7\" data-NarrowGridArea=\"4/1/5/6\" style=\"grid-area:2/6/3/7\">)</div></div></div></div><div class=\"TTSummary\">Creates a new transaction object. The name is the instance name of the transaction. If not supplied, then the object is unnamed.</div></div>",2143:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2143\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">extern function void</span> accept_tr (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">time</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">accept_time</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHNumber\">0</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"1/6/2/7\" data-NarrowGridArea=\"3/1/4/6\" style=\"grid-area:1/6/2/7\">)</div></div></div></div><div class=\"TTSummary\">Calling ~accept_tr~ indicates that the transaction item has been received by a consumer component. Typically a &lt;uvm_driver&gt; would call uvm_component::accept_tr, which calls this method-- upon return from a get_next_item(), get(), or peek() call on its sequencer port, &lt;uvm_driver::seq_item_port&gt;.</div></div>",2144:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2144\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">extern virtual protected function void</span> do_accept_tr ()</div></div><div class=\"TTSummary\">This user-definable callback is called by accept_tr just before the accept event is triggered. Implementations should call ~super.do_accept_tr~ to ensure correct operation.</div></div>",2145:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2145\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">extern function integer</span> begin_tr (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">time</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">begin_time</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHNumber\">0</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"1/6/2/7\" data-NarrowGridArea=\"3/1/4/6\" style=\"grid-area:1/6/2/7\">)</div></div></div></div><div class=\"TTSummary\">This function indicates that the transaction has been started and is not the child of another transaction. Generally, a consumer component begins execution of a transactions it receives.</div></div>",2146:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2146\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">extern function integer</span> begin_child_tr (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">time</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">begin_time</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHNumber\">0</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">integer</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">parent_handle</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\"><span class=\"SHNumber\">0</span></div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"2/6/3/7\" data-NarrowGridArea=\"4/1/5/6\" style=\"grid-area:2/6/3/7\">)</div></div></div></div><div class=\"TTSummary\">This function indicates that the transaction has been started as a child of a parent transaction given by ~parent_handle~. Generally, a consumer component calls this method via uvm_component::begin_child_tr to indicate the actual start of execution of this transaction.</div></div>",2147:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2147\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">extern virtual protected function void</span> do_begin_tr ()</div></div><div class=\"TTSummary\">This user-definable callback is called by begin_tr and begin_child_tr just before the begin event is triggered. Implementations should call ~super.do_begin_tr~ to ensure correct operation.</div></div>",2148:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2148\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">extern function void</span> end_tr (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">time</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">end_time</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHNumber\">0</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">bit</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">free_handle</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\"><span class=\"SHNumber\">1</span></div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"2/6/3/7\" data-NarrowGridArea=\"4/1/5/6\" style=\"grid-area:2/6/3/7\">)</div></div></div></div><div class=\"TTSummary\">This function indicates that the transaction execution has ended.&nbsp; Generally, a consumer component ends execution of the transactions it receives.</div></div>",2149:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2149\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">extern virtual protected function void</span> do_end_tr ()</div></div><div class=\"TTSummary\">This user-definable callback is called by end_tr just before the end event is triggered. Implementations should call ~super.do_end_tr~ to ensure correct operation.</div></div>",2150:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2150\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">extern function integer</span> get_tr_handle ()</div></div><div class=\"TTSummary\">Returns the handle associated with the transaction, as set by a previous call to begin_child_tr or begin_tr with transaction recording enabled.</div></div>",2151:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2151\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">extern function void</span> disable_recording ()</div></div><div class=\"TTSummary\">Turns off recording for the transaction stream. This method does not effect a uvm_component\'s recording streams.</div></div>",2152:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2152\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">extern function void</span> enable_recording (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">stream,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">uvm_recorder&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">recorder</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\"><span class=\"SHKeyword\">null</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"2/6/3/7\" data-NarrowGridArea=\"4/1/5/6\" style=\"grid-area:2/6/3/7\">)</div></div></div></div><div class=\"TTSummary\">Turns on recording to the stream specified by stream, whose interpretation is implementation specific. The optional ~recorder~ argument specifies</div></div>",2153:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2153\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">extern function bit</span> is_recording_enabled()</div></div><div class=\"TTSummary\">Returns 1 if recording is currently on, 0 otherwise.</div></div>",2154:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2154\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">extern function bit</span> is_active ()</div></div><div class=\"TTSummary\">Returns 1 if the transaction has been started but has not yet been ended.&nbsp; Returns 0 if the transaction has not been started.</div></div>",2155:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2155\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">extern function</span> uvm_event_pool get_event_pool ()</div></div><div class=\"TTSummary\">Returns the event pool associated with this transaction.</div></div>",2156:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2156\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">extern function void</span> set_initiator (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_component&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">initiator</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"3/1/4/4\" style=\"grid-area:1/4/2/5\">)</div></div></div></div><div class=\"TTSummary\">Sets initiator as the initiator of this transaction.</div></div>",2157:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2157\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">extern function</span> uvm_component get_initiator ()</div></div><div class=\"TTSummary\">Returns the component that produced or started the transaction, as set by a previous call to set_initiator.</div></div>",2158:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2158\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">extern function time</span> get_accept_time ()</div></div></div>",2159:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2159\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">extern function time</span> get_begin_time ()</div></div></div>",2160:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2160\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">extern function time</span> get_end_time ()</div></div><div class=\"TTSummary\">Returns the time at which this transaction was accepted, begun, or ended, as by a previous call to accept_tr, begin_tr, begin_child_tr, or end_tr.</div></div>",2161:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2161\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">extern function void</span> set_transaction_id(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">integer</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">id</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"3/1/4/4\" style=\"grid-area:1/4/2/5\">)</div></div></div></div><div class=\"TTSummary\">Sets this transaction\'s numeric identifier to id. If not set via this method, the transaction ID defaults to -1.</div></div>",2162:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2162\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">extern function integer</span> get_transaction_id()</div></div><div class=\"TTSummary\">Returns this transaction\'s numeric identifier, which is -1 if not set explicitly by ~set_transaction_id~.</div></div>",2164:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype2164\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const</span> uvm_event_pool events = <span class=\"SHKeyword\">new</span></div></div><div class=\"TTSummary\">The event pool instance for this transaction. This pool is used to track various The begin_event</div></div>",2165:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype2165\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">uvm_event begin_event</div></div><div class=\"TTSummary\">A uvm_event that is triggered when this transaction\'s actual execution on the bus begins, typically as a result of a driver calling uvm_component::begin_tr.&nbsp; Processes that wait on this event will block until the transaction has begun.</div></div>",2166:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype2166\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">uvm_event end_event</div></div><div class=\"TTSummary\">A uvm_event that is triggered when this transaction\'s actual execution on the bus ends, typically as a result of a driver calling uvm_component::end_tr.&nbsp; Processes that wait on this event will block until the transaction has ended.</div></div>"});