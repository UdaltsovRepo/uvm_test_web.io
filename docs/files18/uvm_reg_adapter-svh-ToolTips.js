﻿NDContentPage.OnToolTipsLoaded({36:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype36\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">virtual</span></div><div class=\"CPName\">uvm_reg_adapter</div></div></div><div class=\"TTSummary\">This class defines an interface for converting between uvm_reg_bus_op and a specific bus transaction.</div></div>",41:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype41\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">pure virtual function</span> uvm_sequence_item reg2bus(</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">const ref</span>&nbsp;</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">uvm_reg_bus_op&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">rw</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"3/1/4/5\" style=\"grid-area:1/5/2/6\">)</div></div></div></div><div class=\"TTSummary\">Extensions of this class ~must~ implement this method to convert the specified uvm_reg_bus_op to a corresponding uvm_sequence_item subtype that defines the bus transaction.</div></div>",561:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype561\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_reg_item</div></div></div><div class=\"TTSummary\">Defines an abstract register transaction item. No bus-specific information is present, although a handle to a uvm_reg_map is provided in case a user wishes to implement a custom address translation algorithm.</div></div>",582:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"TTSummary\">Struct that defines a generic bus transaction for register and memory accesses, having ~kind~ (read or write), ~address~, ~data~, and ~byte enable~ information.&nbsp; If the bus is narrower than the register or memory location being accessed, there will be multiple of these bus operations for every abstract uvm_reg_item transaction. In this case, ~data~ represents the portion of uvm_reg_item::value being transferred during this bus cycle.&nbsp; If the bus is wide enough to perform the register or memory operation in a single cycle, ~data~ will be the same as uvm_reg_item::value.</div></div>",990:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype990\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_sequence_item</div></div></div><div class=\"TTSummary\">The base class for user-defined sequence items and also the base class for the uvm_sequence class. The uvm_sequence_item class provides the basic functionality for objects, both sequence items and sequences, to operate in the sequence mechanism.</div></div>",1029:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1029\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_sequence_base</div></div></div><div class=\"TTSummary\">The uvm_sequence_base class provides the interfaces needed to create streams of sequence items and/or other sequences.</div></div>",1454:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1454\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">typedef</span> uvm_tlm_generic_payload </div><div class=\"CPName\">uvm_tlm_gp</div></div></div><div class=\"TTSummary\">This typedef provides a short, more convenient name for the uvm_tlm_generic_payload type.</div></div>",2095:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2095\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">virtual</span></div><div class=\"CPName\">uvm_object</div></div></div><div class=\"TTSummary\">The uvm_object class is the base class for all UVM data and hierarchical classes. Its primary role is to define a set of methods for such common operations as create, copy, compare, print, and record. Classes deriving from uvm_object must implement the pure virtual methods such as create and get_type_name.</div></div>",45:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype45\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_reg_tlm_adapter</div></div></div><div class=\"TTSummary\">For converting between uvm_reg_bus_op and uvm_tlm_gp items.</div></div>"});