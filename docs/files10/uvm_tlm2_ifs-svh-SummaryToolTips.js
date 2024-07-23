﻿NDSummary.OnToolTipsLoaded("File10:uvm_tlm2_ifs.svh",{1247:"<div class=\"NDToolTip TGroup LSystemVerilog\"><div class=\"TTSummary\">Global macro\'s &amp; enums</div></div>",1248:"<div class=\"NDToolTip TEnumeration LSystemVerilog\"><div class=\"TTSummary\">Nonblocking transport synchronization state values between an initiator and a target.</div></div>",1254:"<div class=\"NDToolTip TEnumeration LSystemVerilog\"><div class=\"TTSummary\">Pre-defined phase state values for the nonblocking transport Base Protocol between an initiator and a target.</div></div>",1258:"<div class=\"NDToolTip TMacro LSystemVerilog\"><div class=\"TTSummary\">Defines Not-Yet-Implemented TLM tasks</div></div>",1259:"<div class=\"NDToolTip TMacro LSystemVerilog\"><div class=\"TTSummary\">Defines Not-Yet-Implemented TLM functions</div></div>",1260:"<div class=\"NDToolTip TGroup LSystemVerilog\"><div class=\"TTSummary\">Base class type to define the transport functions.</div></div>",1261:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1261\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_tlm_if<span class=\"TemplateSignature\"> #(<span class=\"SHKeyword\">type</span> T=uvm_tlm_generic_payload, <span class=\"SHKeyword\">type</span> P=uvm_tlm_phase_e)</span></div></div></div><div class=\"TTSummary\">Base class type to define the transport functions.</div></div>",1262:"<div class=\"NDToolTip TGroup LSystemVerilog\"><div class=\"TTSummary\">Each of the interface methods take a handle to the transaction to be transported and a reference argument for the delay. In addition, the nonblocking interfaces take a reference argument for the phase.</div></div>",1263:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1263\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/4/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/4/2\"><span class=\"SHKeyword\">virtual function</span> uvm_tlm_sync_e nb_transport_fw(</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">T&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">t,</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">ref</span>&nbsp;</div><div class=\"PType\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">P&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">p,</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\"><span class=\"SHKeyword\">input</span>&nbsp;</div><div class=\"PType\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">uvm_tlm_time&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"3/4/4/5\" data-NarrowGridArea=\"4/3/5/4\" style=\"grid-area:3/4/4/5\">delay</div><div class=\"PAfterParameters\" data-WideGridArea=\"3/5/4/6\" data-NarrowGridArea=\"5/1/6/5\" style=\"grid-area:3/5/4/6\">)</div></div></div></div><div class=\"TTSummary\">Forward path call.&nbsp; The first call to this method for a transaction marks the initial timing point.&nbsp; Every call to this method may mark a timing point in the execution of the transaction. The timing annotation argument allows the timing points to be offset from the simulation times at which the forward path is used.&nbsp; The final timing point of a transaction may be marked by a call to nb_transport_bw or a return from this or subsequent call to nb_transport_fw.</div></div>",1264:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1264\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/4/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/4/2\"><span class=\"SHKeyword\">virtual function</span> uvm_tlm_sync_e nb_transport_bw(</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">T&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">t,</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">ref</span>&nbsp;</div><div class=\"PType\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">P&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">p,</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\"><span class=\"SHKeyword\">input</span>&nbsp;</div><div class=\"PType\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">uvm_tlm_time&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"3/4/4/5\" data-NarrowGridArea=\"4/3/5/4\" style=\"grid-area:3/4/4/5\">delay</div><div class=\"PAfterParameters\" data-WideGridArea=\"3/5/4/6\" data-NarrowGridArea=\"5/1/6/5\" style=\"grid-area:3/5/4/6\">)</div></div></div></div><div class=\"TTSummary\">Implementation of the backward path.&nbsp; This function MUST be implemented in the INITIATOR component class.</div></div>",1265:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1265\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">virtual task</span> b_transport(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">T&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">t,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">uvm_tlm_time&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">delay</div><div class=\"PAfterParameters\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"4/1/5/4\" style=\"grid-area:2/4/3/5\">)</div></div></div></div><div class=\"TTSummary\">Execute a blocking transaction. Once this method returns, the transaction is assumed to have been executed. Whether that execution is succesful or not must be indicated by the transaction itself.</div></div>"});